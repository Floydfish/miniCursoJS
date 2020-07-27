const root = document.querySelector('#root')
const textTitle = 'Dificuldade'


//Tagged Template String
const title = Title`
    color: #DE1FD8;
    font-size: 250%;
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wrapper);
root.insertAdjacentHTML('beforeend', slide);

