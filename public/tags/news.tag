
<news>
    <style>
        news {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-y: auto;
        }
            news > .new {
                display: flex;
                flex-direction: column;
                flex-shrink: 0;
            }
                news > .new:not(:last-child){
                    margin-bottom: 10px;
                }
                news > .new > .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: white;
                    padding: 5px 10px;
                    background: #78909C;
                }
                    news > .new > .title > p{
                        font-weight: bold;
                        color: white;
                        font-size: 14pt;
                    }
                    news > .new > .title > span{
                        display: flex;
                        background: white;
                        padding: 2px 5px;
                        border-radius: 5px;
                        font-size: 12pt;
                        font-style: italic;
                    }
                news > .new > .text{
                    display: flex;
                    background: white;
                    padding: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0, 0.2) inset;
                    text-align: justify;
                }
    </style>

    <section each={opts.data} class="new">
        <section class="title">
            <p>{ title }</p>
            <span>{ date }</span>
        </section>
        <section class="text">
            <p>{ text }</p>
        </section>
    </section>
    <script>
        let interval = setInterval(() => {
            this.opts = require('../config/news2.json');
            this.update();
            console.log("news updated");
            clearInterval(interval);
        }, 5000);
    </script>
</news>
    