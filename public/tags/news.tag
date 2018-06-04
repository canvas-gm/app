
<news>
    <style>
        news {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            border-radius: 4px;
            box-sizing: border-box;
        }
            news > .new {
                display: flex;
                flex-direction: column;
                flex-shrink: 0;
                border-radius: 4px;
                overflow: hidden;
            }
                news > .new:not(:last-child){
                    margin-bottom: 10px;
                }
                news > .new > .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: white;
                    padding: 4px 8px;
                    background: #455A64;
                }
                    news > .new > .title > p{
                        font-weight: bold;
                        color: white;
                        font-size: 12pt;
                    }
                    news > .new > .title > span{
                        display: flex;
                        color: #FFF;
                        background: #37474F;
                        padding: 2px 5px;
                        border-radius: 5px;
                        font-size: 10pt;
                        font-weight: bold;
                    }

                news > .new > .text {
                    display: flex;
                    background: #ECEFF1;
                    padding: 10px;
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
