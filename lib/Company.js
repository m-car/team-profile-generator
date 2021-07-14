const fs = require("fs");
const inquirer = require("inquirer");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");
const HTML = require("./HTML");
const Intern = require("./Intern");
const Manager = require("./Manager");

const html = new HTML();



class Company {
  constructor(){
    this.CompanyName ="Your Team";
    this.employeeList = [];
  }

  run(){
    console.log("=====Welcome to Team Profile Genererator=====\n\n");
    console.log("====RUN SUCESSESFUL")
    this.promptManager()
    // .then(() => this.confirmAddEmployee());
  }
  promptManager(){
    console.log("====PROMPTMANAGER SUCESSESFUL")
    return inquirer.prompt(ManagerQuestions).then(({name, id, email, office}) => {
      const manager = new Manager(name, id, email, office)
      
      
    
      console.log(manager);
    })
  }
  confirmAddEmployee() {
    return inquirer
    .prompt([
      {
        name: "shouldAddEmployee",
        message: "Would you like to add another Employee?",
        type: "confirm",
      },
    ])
    .then(({ shouldAddEmployee }) => {
      if (shouldAddEmployee) {
        return this.promptEmployeeAdd();
      }
      return this.done();
    });
  }
  
  done() {
    // this.saveFile().then(() => console.log("Your Employee page is ready!"));
    this.generateHTML().then(() => console.log("Your Employee page is ready!"));
  }
  // saveFile() {
    //   return fs.writeFile(
      //     "dist/index.html",
      //     html.render(this.CompanyName, this.employeeList)
      //   );
      // }
      
      generateHTML(){
        console.log("html generated")
        return `html generated`
      }
      //  init(){
      //   // console.log("=====Welcome to Team Profile Genererator=====\n\n");
      //   inquirer.prompt(this.promptManager).then((answers)=>{
      //     const myHTML = generateHTML(answers);
      //     writeToFile("../dist/index.html", myHTML);
      //   })
      // }
      
    }
    // generateHTML()
    
    // promptIntern(){
    //   return inquirer.prompt([InternQuestions]).then(({}))
    // }
    // promptEmployeeAdd(){
    //   return inquirer
    //   .prompt([
    //     {
          
    //       type: "list",
    //       name: "employee",
    //       message: "new employee?",
    //       choices: [
    //         "Intern",
    //         "Engineer",
    //         "Do not add more",
    //         ],
    //     },
  
  
    //   ]).then(({employee}) =>{
    //     if(employee === "Intern")
    //     promptIntern()
    //     this.employeeList.push(new Intern() 
    //   })
    // }
    
    
    








    
    // function writeToFile(fileName, data){
      //   fs.writeFile(fileName, data, (err)=>{
        //     if (err){
//       console.log(err.message);
//       console.log("failed");
      
//     }else{
//       console.log("created HTML in the dist folder")
//     }
//   });
  
// }

function generateEmployerObj(){
  
}





ManagerQuestions= [
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
    name:"office",
    message: "What is the Manager's Office Number?",
  },
  
  // {
  //   type: "list",
  //   name: "employee",
  //   message: "new employee?",
  //   choices: [
  //     "Intern",
  //     "Engineer",
  //     "Do not add more",
  //     //   {
  //       //     name: "No License",
  //       //     value: "",
  //       //   },
  //     ],
  //   },
    
  ];
  module.exports = Company