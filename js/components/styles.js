const css = `<style>
            * {
                margin: 0;
                padding: 0;
                border: none;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: blueviolet;
            }

            #root {
                box-sizing: border-box;
                background-color:#04559C;
                width: 40vw;
                mind-width: 768px;
                height: 70vh;
                font-family: 'Press Start 2P', cursive;
                text-align: center;
                padding-top: 4rem;
            }

            #uni {
                display: inline-block;
            }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)