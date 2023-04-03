function generateLogo(logoShape, text, textColor, textHex) {
    // if user selected custom color then use the custom hex value as textColor
    if (textColor === 'custom') {
        textColor = textHex
    }
    return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logoShape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
}

module.exports = generateLogo;