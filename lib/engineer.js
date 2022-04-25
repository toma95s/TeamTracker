const { Module } = require("module");
const Employee = require("./employee")
class Engineer extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, Github) {
        super(name, id, email)
        this.Github = Github
    }
  Github(){
      return this.Github
  }
    getRole(){
        return 'Engineer'
    }
  }

  module.exports = Engineer