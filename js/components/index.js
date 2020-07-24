const root = document.querySelector('#root')
const textTitle = 'Dificuldade'
const textSmall = 'Texto pequeno'

//Tagged Template String
const title = Title`
    color: #00803D;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    ${textTitle}
    // font-size: 2rem;
    // ${textSmall}
`

root.insertAdjacentHTML('beforeend', title)