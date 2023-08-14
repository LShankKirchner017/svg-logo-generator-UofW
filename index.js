import fs from "fs"
import { questions } from "./lib/questions.js"
import inquirer from "inquirer"
// import { generateLogo } from "./lib/generateLogo.js"


// initialize app
function init (){
    inquirer.prompt(questions)
    .then((answers) => {
        const logo = generateLogo(answers)
        console.log(logo)
        fs.writeFile("./logo.svg", logo, err => {
            if(err){
                throw err 
            }
            console.log("Logo successfully created!")
            })
        })
    .catch((error) => {
        console.log(error)
    })
}

init()
