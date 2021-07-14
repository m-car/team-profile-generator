const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id , email , officeNumber ){
        super(name, id , email);
        this.officeNumber = officeNumber; 
        this.role = "Manager";
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager

// Inherits from "Employee object"
// - officeNumber: Number - returns office number 

// -getRole(): String - overrides parent class to return 'Manager'