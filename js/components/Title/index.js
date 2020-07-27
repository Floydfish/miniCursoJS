function Title(css, textContent, smallContent) {
    console.log(css)
    return `
        <h1 style="${css}">
            ${textContent}
        </h1>`
}