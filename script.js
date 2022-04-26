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
    {
        type:"input",
        message: "what is your manager office number",
        name: "managerOfficeNumber"    
    },
    ]) .then(function(response){
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)

        employees.push(newManager)
        menu()
    
        // call menu function here
    }
    )
}

function menu(){
    console.log (employees)
    inquirer.prompt(
        {
            type:"list",
            message: "What will you like to do",
            name: "choice",
            choices: ["add engineer", "add intern", "finish"]
        
        }
    ) .then(function(response){
        if (response.choice === "add engineer"){
            getEngineer() //get engineer function
        } else if(response.choice === "add intern"){
            getIntern()// get intern function
        } else{
            // finish function
        }
    })
}
function getEngineer(){
    inquirer.prompt([
        {
            type:"input",
            message: "what is your name",
            name: "engineerName"   
        },
        {
        type:"input",
        message: "what is your engineer id",
        name: "engineerId"   
    },
    {
        type:"input",
        message: "what is your engineer email",
        name: "engineerEmail"    
    },
    {
        type:"input",
        message: "what is your Github user name",
        name: "githubUserName"    
    },
    ]) .then(function(response){
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.githubUserName)
        employees.push(newEngineer)
        menu()
    
        // call menu function here
    }
    )
}
function getIntern(){
    inquirer.prompt([
        {
            type:"input",
            message: "what is your name",
            name: "internName"   
        },
        {
        type:"input",
        message: "what is your intern id",
        name: "internId"   
    },
    {
        type:"input",
        message: "what is your intern email",
        name: "internEmail"    
    },
    {
        type:"input",
        message: "what is your school name",
        name: "schoolName"    
    },
    ]).then(function(response){
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.schoolName)
        employees.push(newIntern)
        menu()
    
        // call menu function here
    }
    ).catch(function(error){
        console.log (error)
    })
}

getManager()
function finish(){
var employeeHtml = ""
for (let i = 0; i <employees.length; i++) {
    if (employees[i].getRole === "Manager") {
    employeeHtml = employeeHtml + `<div>
    <h2>${employees[i].getName()}</h2>
    </div>
    `  
    }else if(employees[i].getRole === "Engineer"){
        employeeHtml = employeeHtml + `<div>
        <h2>${employees[i].getName()}</h2>
        </div>
        `  
    }else{
        employeeHtml = employeeHtml + `<div>
    <h2>${employees[i].getName()}</h2>
    </div>
    `  
    }
    
}    
var html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="assets/style.css">

    <title>Team Tracker/title>
</head>
<body>
    <div class="heading">
        <h1>Team Tracker</h1>
    </div>

    <div class="contents">

    </div>


    <script src="script.js"></script>
</body>
</html>`
}