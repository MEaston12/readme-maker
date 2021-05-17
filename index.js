const inquirer = require('inquirer');
inquirer.prompt([
    {
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: input => !!input
    },
    {
        name: 'description',
        message: 'Give the extended description of your project.',
        validate: input => !!input
    },
    {
        name: 'installation',
        message: 'Give installation instructions for your project.',
        validate: input => !!input
    },
    {
        name: 'usage',
        message: 'How is your project intended to be used?',
        validate: input => !!input
    },
    {
        name: 'contribution',
        message: 'Explain the contribution guidelines you would like for your project.',
        validate: input => !!input
    },
    {
        name: 'testInstructions',
        message: 'Explain how testing is meant to be done with your project.',
        validate: input => !!input
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using for this project?',
        choices: [
            'MIT',
            'GNU GPLv3'
        ],
        validate: input => !!input
    },
    {
        name: 'contactName',
        message: 'Give your Github username in case users have questions.',
        validate: input => !!input
    },
    {
        name: 'contactEmail',
        message: 'Give an email address in case users have questions.',
        validate: input => !!input
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(JSON.stringify(answers));
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
    console.log(error);
  });