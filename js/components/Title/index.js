function Title(css, textContent, smallContent) {
    console.log(css)
    return `
        <h1 style="${css[0]}">
            ${textContent}
            <small>${smallContent}</small>
        </h1>`
}