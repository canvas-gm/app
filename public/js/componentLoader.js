// Require Node.JS Dependencies
const { join, extname } = require("path");
const { readFile, readdir, stat } = require("fs");
const { promisify } = require("util");

// Require Third-party dependencies
const is = require("@sindresorhus/is");

// Asynchronous FS Wrapper
const asyncFS = {
    readFile: promisify(readFile),
    readdir: promisify(readdir),
    stat: promisify(stat)
};

/**
 * @class componentLoader
 *
 * @property {Map} components List of components
 * @property {String} componentPath Path to the components directory!
 * @property {Boolean} domLoaded Boolean to know if the dom has been loaded or not!
 */
class componentLoader {

    /**
     * @constructor
     * @param {!String} componentPath path to all HTML Elements
     * @throws {TypeError}
     */
    constructor(componentPath) {
        if (!is.string(componentPath)) {
            throw new TypeError("componentPath param should be typeof string");
        }

        this.components = new Map();
        this.componentPath = componentPath;
    }

    /**
     * @async
     * @method initialize
     * @desc Initialize components
     * @memberof componentLoader#
     * @returns {Promise<void>}
     *
     * @throws {Error}
     */
    async initialize() {
        const files = await asyncFS.readdir(this.componentPath);
        for (const dirName of files) {
            const dirPath = join(this.componentPath, dirName);

            // Check if this is a directory
            const stat = await asyncFS.stat(dirPath);
            if (!stat.isDirectory()) {
                continue;
            }

            // Retrieve files in current directory!
            const currDirFiles = await asyncFS.readdir(dirPath);
            if (currDirFiles.length === 0) {
                continue;
            }

            const component = {
                view: null
            };
            let findComponent = false;
            for (const file of currDirFiles) {
                const ext = extname(file);
                if (ext === ".js") {
                    if (findComponent) {
                        continue;
                    }
                    findComponent = true;
                    Reflect.set(component, "script", join(dirPath, file));
                }
                else if(ext === ".html") {
                    Reflect.set(component, "view", join(dirPath, file));
                }
            }

            if (findComponent) {
                this.components.set(dirName, component);
            }
        }

        const bodyElement = document.querySelector("body");
        const templateContainer = document.createElement("section");
        templateContainer.id = "templateContainer";
        bodyElement.appendChild(templateContainer);
        this.templateContainer = templateContainer;
    }

    /**
     * @async
     * @method loadComponent
     * @desc load a given component
     * @memberof componentLoader#
     * @param {!String} componentName component name to load
     * @returns {Promise<void>}
     *
     * @throws {Error}
     */
    async loadComponent(componentName) {
        if (!this.components.has(componentName)) {
            throw new Error(`Unknow component with name ${componentName}`);
        }
        const { script, view = null } = this.components.get(componentName);
        const path = join(__dirname, "../..", script);

        const componentClass = require(path);
        if (!is.nullOrUndefined(view)) {
            const htmlStr = (await asyncFS.readFile(view)).toString();
            this.templateContainer.innerHTML += htmlStr;
        }

        // Declare HTML Component (element)
        customElements.define(componentName, componentClass);
        console.log(`${componentName} loaded successfully!`);
    }

}

module.exports = componentLoader;
