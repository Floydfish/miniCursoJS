const pathUniEasy = '../images/easy.svg'
const pathUniNormal = '../images/normal.svg'
const pathUniHard = '../images/hard.svg'

const Wrapper = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const uniE = Character`
    width: 25%;
    ${pathUniEasy}
`

const uniN = Character`
    width: 25%;
    ${pathUniNormal}
`

const uniH = Character`
    width: 25%;
    ${pathUniHard}
`

const wrapper = Wrapper`
    display: flex;
    justify-content: space-evenly;
    ${uniE + uniN + uniH}
`


// wrapper.insertAdjacentHTML('beforeend', );
// wrapper.insertAdjacentHTML('beforeend', uniN);
// wrapper.insertAdjacentHTML('beforeend', uniH);