// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateLogo } = require("./lib/shapes")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters',

    },
    {
        type: 'input',
        name: 'color',
        message: 'Choose a text color enter a color keyword (OR a hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a shape color enter a color keyword (OR a hexadecimal number)',
    }
]
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err)
            : console.log('Successfully Generated logo.svg')
    );
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            try {
                if (answers.text.length > 0 && answers.text.length < 4) {
                    const logoContent = generateLogo(answers);
                    writeToFile('logo.svg', logoContent)
                } else {
                    throw new Error("Input is required to be between 1-3 characters try again!")
                }

            } catch (error) {
                console.error(error.message);
            }
        });
}

init();