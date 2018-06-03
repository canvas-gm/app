// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const is = require("@sindresorhus/is");

// Globals
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minHeight: 600,
        minWidth: 1000,
        frame: false
    });
    mainWindow.webContents.openDevTools();

    mainWindow.loadFile("./views/index.html");
    
    mainWindow.on("closed", function closed() {
        mainWindow = void 0;
    });
}
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function windowAllClosed() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function activate() {
    if (is.nullOrUndefined(mainWindow)) {
        createWindow();
    }
});
