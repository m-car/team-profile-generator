const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id , email , githubAcc ){
        super(name, id , email);
        this.githubAcc = githubAcc; 
        this.role = "Engineer";
    }
    getRole(){
        return this.role;
    }
    getAccount(){
        return this.githubAcc;
    }
}

module.exports = Engineer;

// Inherits from "Employee object"
// - officeNumber: Number - returns office number 

// -getRole(): String - overrides parent class to return 'Manager'