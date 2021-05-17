const inquirer = require('inquirer');
const fs = require('fs');

const licenses = require('./refs/licenses.json');

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
        name: 'testing',
        message: 'Explain how testing is meant to be done with your project.',
        validate: input => !!input
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using for this project?',
        choices: Object.keys(licenses)
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
        const readmeStr = 
`# ${answers.projectName}

${licenses[answers.license]}

## Description
${answers.description}
## Table of Contents
1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [Testing](#testing)
7. [License](#license)
8. [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Testing
${answers.testing}
## License
${answers.license}
## Questions
If you have any additional questions, contact me at:
Github: [${answers.contactName}](https://github.com/${answers.contactName})
Email: ${answers.contactEmail}
`
        fs.writeFileSync('./out/README.md', readmeStr);
        console.log(`Completed readme has been saved to ${__dirname}\\out\\README.md`);
    })
    .catch(error => {
        if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        } else {
            // Something else went wrong
            console.log(error);
        }
    });