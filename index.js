// Runs the application using imports from lib/

const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js');
const {Triangle, Square, Circle} = require('./lib/shapes.js');




// This object array is based on the implementation provided by Ryan Spath
const ColorKeyWords = [
    { name: "black", value: "#000000"},
    { name: "white", value: "#FFFFFF"},
    { name: "red", value: "#FF0000"},
    { name: "orange", value: "#ffa500"},
    { name: "yellow", value: "#FFFF00"},
    { name: "green", value: "#008000"},
    { name: "blue", value: "#0000FF"},
    { name: "indigo", value: "#4b0082"},
    { name: "violet", value: "#ee82ee"},
    { name: "custom", value: "custom"}
]

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
        },
        filter: (value) => {
            return value.toUpperCase();
        }
    },
    {
        type: 'list',
        message: 'Select the color for your logo text.',
        name: 'textColor',
        choices: ColorKeyWords,
    },
    {
        type: 'input',
        message: 'Please enter your custom hexidecimal color.',
        name: 'colorHex',
        when: (answers) => { return answers.color === "custom" },
        // Uses regular expression to check if the hex code is a valid hexidecimal color
        validate: function (input) {
            const hex = /^#[0-9a-f]{6}$/ig
            if (input.match(hex) === null) {
                return 'Please enter a valid hexidecimal color code (e.g. #3c4b5a)'
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Please select the shape you like to use for your logo.',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
        default: 'circle',
    },
    {
        type: 'list',
        message: 'Select the color for your logo background.',
        name: 'shapeColor',
        choices: ColorKeyWords,
    },
    {
        type: 'input',
        message: 'Please enter your custom hexidecimal color.',
        name: 'backgroundHex',
        when: (answers) => { return answers.background === "custom" },
        // Uses regular expression to check if the hex code is a valid hexidecimal color
        validate: function (input) {
            const hex = /^#[0-9a-f]{6}$/ig
            if (input.match(hex) === null) {
                return 'Please enter a valid hexidecimal color code (e.g. #3c4b5a)'
            }
            return true;
        }
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
    console.log('SVG Logo has been successfully created!');
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
    console.log(data)
    let newShape
    if (data.shape === 'square') {
        newShape = new Square(data.shapeColor)
    } else if (data.shape === 'circle') {
        newShape = new Circle(data.shapeColor)
    } else {
        newShape = new Triangle(data.shapeColor)
    }
    console.log(newShape)
    const logoShape = newShape.render()
    const svg = generateLogo(logoShape, data.text, data.textColor);
    writeToFile('Logo.svg', svg);
    });
}

init();