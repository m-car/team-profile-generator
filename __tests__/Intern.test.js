const Intern = require("../lib/Intern.js")
describe("Intern class", ()=>{
    describe("constructor", () => {
        //arrange
        it("Sets name, id , email, school", ()=>{
            const name = "marko"
            const id = 5;
            const email = "marko@gmail.com";
            const school = "UCSD"

            //act 
            const intern = new Intern(name, id, email , school)
            
            //assert
            expect(intern).toEqual({
                name:"marko", 
                id: 5, 
                email: "marko@gmail.com",
                role: "Intern",
                school: "UCSD"
            })


        })

    })
    describe("getRole", () =>{
        const intern = new Intern("marko", 5, "marko@gmail.com");
        const result = intern.getRole();
        expect(result).toEqual("Intern");
    })
})