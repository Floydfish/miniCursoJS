const css = `<style>
    :root {
        --line-height: 10px;
        --color: #fd79a8;
    }


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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        background-color:#04559C;
        width: 40vw;
        mind-width: 768px;
        height: 50vh;
        font-family: 'Dancing Script', cursive;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 6rem;
    }

</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', css)