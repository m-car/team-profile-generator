# Classes

## team object 

## Employee 
    
Properties :  
    
- name: String -employee name

- id: Number - unique employee id- 1 

- email:String - employees email - fred@email.com
    constraints: must have @ and .com , find exceptions for bad email 

Methods: 
- getName(): String - returns employees name

- getId(): Number - returns employees id

- getEmail(): String - returns employees email 

- getRole(): String - returns 'Employee type'

## Manager
Inherits from "Employee object"
- officeNumber: Number - returns office number 

-getRole(): String - overrides parent class to return 'Manager'

## Engineer 
- github: String: GitHub username

- getGithub():String/link - add github username to github url, returns github account link

- getRole(): String -  overrides parent class  to return 'Engineer'

## Intern
- school: String - Interns school name

- getSchool()

- `getRole()`&mdash;overridden to return `'Intern'`
## commandline object or app object

## HTML 
