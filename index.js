// Runs the application using imports from lib/

const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
// text - max three characters, text color keyword or hex #, shape(list) - circle, triangle, square, shape color keyword or hex #
const questions = [
    {
        type: 'input',
        message: 'Enter the text for your logo.(Max three characters)',
        name: 'text',
        validate: (value) => {
            if (value.length > 3) {
                return 'Please enter a maximum of three characters'
            } else if (value) {
                return true
            } else {
                return 'Please enter text for your logo.(Max three characters)'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the color for your logo text.(You can use a color keywords or a hexideimal number)',
        name: 'color',
        validate: (value) => {
        }
    },
    {
        type: 'list',
        message: 'Please select the shape you like to use for your logo.',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape',
        default: 'Circle',
    },
    {
        type: 'input',
        message: 'Enter the color for your logo background.(You can use a color keywords or a hexideimal number)',
        name: 'background',
        validate: (value) => {
        }
    },
]

function init() {
    inquirer.prompt(questions).then((data) => {
      const svg = generateSVG(data);
      writeToFile('logo.svg', svg);
    });
  }

init();