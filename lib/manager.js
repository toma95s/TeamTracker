const { Module } = require("module");
const Employee = require("./employee")
class Manager extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
  
    getRole(){
        return 'Manager'
    }
  }

  module.exports = Manager