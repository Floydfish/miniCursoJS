const root = document.querySelector('#root')
const textTitle = 'Dificuldade'
const textSmall = 'Texto pequeno'

//Tagged Template String
const title = Title`
    color: red;
    ${textTitle}
    font-size: 20px;
    ${textSmall}
`

root.insertAdjacentHTML('beforeend', title)