const Action = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const action = Action`
    height: calc(var(--line-height)*2);
    width: calc(var(--line-height)*2);
    backgroung-color: #00cec9;
`

const slideContent = 'Vai!'

const item = Item`
    list-style: none;
    height: calc(var(--line-height)*3);
    width: calc(var(--line-height)*3);
    background-color: var(--color);
`

const slide = Slide`
    width: 80%;
    height: var(--line-height);
    background-color: var(--color);
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${item + item + item}
`

// const item1 = Item`

// `