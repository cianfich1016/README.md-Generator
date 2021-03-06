// Include packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
//Allow export to be imported to index.js.
const generateMarkdown = require('./generateMarkdown.js');

//Array of questions for user input
const questionsPrompt = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter a link to your GitHub profile.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'If there are any specific installation instructions, please list here.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage instructions here.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What information should a user know about running tests?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license best represents your project?',
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "No license choice selected."]
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
      },
    ]);
  };

// Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("View your README.md file now!")
  );
   
};

// Function to initialize app
const init = () => {
    questionsPrompt()
        .then((data) => writeToFile(data))
        
}

//Initialize app
init();

