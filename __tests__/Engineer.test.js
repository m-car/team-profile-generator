// describe("Engineer", ()=>{
//     it.todo("nothing here yet")
// })

// // const Employee = require("../lib/Employee.js")
const Engineer = require("../lib/Engineer.js")
describe("Engineer class", ()=>{
    describe("constructor", () => {
        //arrange
        it("Sets name, id , email, githubAcc", ()=>{
            const name = "marko"
            const id = 5;
            const email = "marko@gmail.com";
            const githubAcc = "m-car"

            //act 
            const engineer = new Engineer(name, id, email , githubAcc)
            
            //assert
            expect(engineer).toEqual({
                name:"marko", 
                id: 5, 
                email: "marko@gmail.com",
                role: "Engineer",
                githubAcc: "m-car"
            })


        })

    })
    describe("getRole", () =>{
        const engineer = new Engineer("marko", 5, "marko@gmail.com");
        const result = engineer.getRole();
        expect(result).toEqual("Engineer");
    })
})