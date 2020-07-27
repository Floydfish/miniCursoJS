const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const slideContent = 'Vai!'

const item = Item`
    list-style: none;
    height: calc(var(--line-height)*4);
    width: calc(var(--line-height)*4);
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