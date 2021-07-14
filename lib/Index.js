const fs = require("fs");
const inquirer = require("inquirer");

questions= [
    {
      type: 'input',
      message: 'What is the Name of the Team Manager?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the ID number of the Manager',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the Employees email address',
      name: 'email',
    },
    {
        type: "input",
        name:"github",
        message: "What is your github profile name?",
    },
    
    {
        type: "list",
        name: "license",
        message: "Choose a license",
        choices: [
          "MIT",
          "ISC",
          "GPL v3",
          {
            name: "No License",
            value: "",
          },
        ],
    },

];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err)=>{
        if (err){
            console.log(err.message);
            console.log("failed");

        }else{
            console.log("created HTML in the dist folder")
        }
    });
    
}

function renderLicenseSection(license) {
    return
}
function generateHTML(data){
}

function init(){
    inquirer.prompt(questions).then((answers)=>{
      const myHTML = generateHTML(answers);
      writeToFile("dist/index.html", myHTML);
    })
  }
  init();