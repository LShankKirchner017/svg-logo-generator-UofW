import { writeFile } from "fs/promises"
import { questions } from "./lib/questions.js"
import inquirer from "inquirer"
import { generateLogo } from "./lib/generateLogo.js"


// initialize app
function init(){
    inquirer.prompt(questions)
    .then((answers => {
        const logo = generateLogo(answers)
        console.log("Logo created successfully!")
        return writeFile("./examples/newLogo.svg", logo)
    }))
    .catch((error => {
        console.log("Error occurred")
    }))
}
init()
