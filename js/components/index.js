const root = document.querySelector('#root')
const textTitle = 'Dificuldade'


//Tagged Template String
const title = Title`
    color: #00803D;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wrapper);

