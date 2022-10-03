// inquier is a dependency needed to run this program. it allows us to use the a promp that populates questing specified in the prompt
const inquirer = require('inquirer'); 
// importing fs. this is a package that helps us write files. like inquirer it has to be declared or it can't be used.
const fs = require('fs');
// this is how this file is able to use the formatting and function of the ReadmeGn file.
const readMePageContent = require('./ReadmeGn');

// this is the inquirer prompt. this is how you write out the questions that will appear in the terminal 
inquirer
    .prompt([
        {
            type: 'input', // this is how you define how vs code takes in the user input. there are different types of input this promp can use.
            name: 'github', // the name assigned will help you create a path for where you want to output the information the user puts in
            message: 'What is your GitHub Username?', // this is where you write the question that will be seen in the prompt.
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'list', // the list function makes a list in the prompt with the choices you add in the choices
            name: 'license',
            message: 'Which license would you like to add to your README.md file?',
            choices: ['MIT', 'ISc', 'GNUGPLV3', 'APACHE', 'TheArtisticLicense', 'BSD3','TheUnlicense','WTFPL', 'none'],
  
        },
        {
            type: 'input',
            name: 'command',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'repoUsage',
            message: 'What does the user need to know about using the repo??',
        },
        {
            type: 'input',
            name: 'contriBute',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])
    .then((answers) => { // this is the function that calls everything back to write the README.md file. 
        const MePageContent = readMePageContent(answers);

        fs.writeFile('README.md', MePageContent, (err) =>
            err? console.log(err) : console.log('Successfully created a README.md file!')
        );
    });
