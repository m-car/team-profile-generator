//import employee class
const Employee = require("../lib/Employee.js")
//create a test suite with describe
describe("Employee class", ()=>{
    describe("constructor", ()=>{
        //test for name
        it("Sets name, id , email properties",()=>{
            //arrange
            const name = "marko"

            //act
            const employee = new Employee("marko", 5, "marko@gmail.com")

            //assert
            expect(employee).toEqual({
                name:"marko", 
                id: 5, 
                email: "marko@gmail.com"
            });
        })
        
    })
})


// Properties :  
    
// - name: String -employee name

// - id: Number - unique employee id- 1 

// - email:String - employees email - fred@email.com
//     constraints: must have @ and .com , find exceptions for bad email 

// Methods: 
// - getName(): String - returns employees name

// - getId(): Number - returns employees id

// - getEmail(): String - returns employees email 

// - getRole(): String - returns 'Employee type'