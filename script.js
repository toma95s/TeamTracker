const inquirer = require("inquirer")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/Intern")
const employees = []

function getManager(){
    inquirer.prompt([
        {
            type:"input",
            message: "what is your name",
            name: "managerName"   
        },
        {
        type:"input",
        message: "what is your manager id",
        name: "managerId"   
    },
    {
        type:"input",
        message: "what is your manager email",
        name: "managerEmail"    
    },
    ]) .then(function(response){
        const newManager = new Manager(response.managerName, response.ManagerId, response.ManagerEmail)
        employees.push(newManager)
        // call menu function here
    }
    )
}

function menu(){
    inquirer.prompt(
        {
            type:"list",
            message: "What will you like to do",
            name: "choice",
            choices: ["add engineer", "add intern", "finish"]
        
        }
    ) .then(function(response){

    })
}
