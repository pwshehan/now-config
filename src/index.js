const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const existingonfig = fs.existsSync('now.json');

function buildConfig() {
  const config = {
    version: 2,
  };

  inquirer
    .prompt([
      {
        type: 'text',
        name: 'name',
        message: 'What is the name of the project?',
        default: path.basename(process.cwd()),
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of project?',
        choices: [
          'node-express',
          'static',
          'react',
          'vue',
          'static-build',
          'lambda',
        ],
      },
    ])
    .then((answers) => {
      config.name = answers.name;
    });
}

if (existingonfig) {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'now.json already exists! would you like to overwrite it?',
        default: false,
      },
    ])
    .then((answers) => {
      if (answers.overwrite) {
        buildConfig();
      } else {
        console.log('Good Bye! 👋');
      }
    });
} else {
  buildConfig();
}
