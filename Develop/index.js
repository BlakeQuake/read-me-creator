// array of questions for user
const inquirer = require("inquirer")
const fs = require("fs")
inquirer.prompt([
    {
        type:"input",
        message:"what is the title of this project?",
        name:"title"
    },
    {
        type:"input",
        message:"Give a short description",
        name:"description",
    },
    {
        type:"input",
        message:"what is your email?",
        name:"email"
    },
    {
        type:"input",
        message:"what is your github?",
        name:"github"
    },
    {
        type:"list",
        message:"select a license",
        name:"license",
        choices:["MIT", "ISC", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    }
]).then((response) => {
console.log(response)
fs.writeFile("README.md", `# ${response.title} \n`, (error) => {
    if (error === true) {
        console.log("error")
    } 
})
fs.appendFile("README.md", `## Description \n ${response.description} \n`, (error) => {
    if (error === true) {
        console.log("error")
    } 
})
fs.appendFile("README.md", `## Table of Contents \n * [Title](#${response.title}) \n * [Description](#Description) \n`, (error) => {
    if (error === true) {
        console.log("error")
    } 
})
fs.appendFile("README.md", `## Questions \n * If you have any questions please email me or visit my Github Repo. \n 
* email:${response.email} \n * Github Repo:[GitHub](http://github.com/${response.github}) \n`, (error) => {
    if (error === true) {
        console.log("error")
    }})
fs.appendFile("README.md", `## License \n * [![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)](https://github.com/${response.github}/${response.title})`, (error) => {
    if (error === true) {
        console.log("error") }})

})
const questions = [


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
