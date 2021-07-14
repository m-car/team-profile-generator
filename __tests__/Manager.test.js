// describe("Manager", ()=>{
//     it.todo("nothing here yet")
// })




// // const Employee = require("../lib/Employee.js")
const Manager = require("../lib/Manager.js")
describe("Manager class", ()=>{
    describe("constructor", () => {
        //arrange
        it("Sets name, id , email, office number properties", ()=>{
            const name = "marko"
            const id = 5;
            const email = "marko@gmail.com";
            const officeNumber = 86

            //act 
            const manager = new Manager(name, id, email , officeNumber)
            
            //assert
            expect(manager).toEqual({
                name:"marko", 
                id: 5, 
                email: "marko@gmail.com",
                role: "Manager",
                officeNumber: 86,
            })


        })

    })
    describe("getRole", () =>{
        const manager = new Manager("marko", 5, "marko@gmail.com");
        const result = manager.getRole();
        expect(result).toEqual("Manager");
    })
})