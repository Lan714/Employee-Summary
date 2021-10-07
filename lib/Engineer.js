const Employee = require('./Employees.js')

class Engineer extends Employee {
  constructor(name, role, id, email) {
    super(name, role, id, email)
    this.github;
  }

  setGithub = link => this.github = link

  getGithub = _ => this.github

}

module.exports = Engineer