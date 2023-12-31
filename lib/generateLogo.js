// Importing shapes form library 
import * as Shapes from "../lib/shapes.js"

export function generateLogo(logoOptions) {
    const Shape = Shapes[logoOptions.shapeChoice]

    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${new Shape(logoOptions.shapeColor).render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      logoOptions.textColor
    }">${logoOptions.text}</text>
</svg>`;
}