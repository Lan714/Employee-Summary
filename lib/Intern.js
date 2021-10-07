const Employee = require('./Employee')

class Intern extends Employee{
  constructor(name, role, id, email) {
    super(name, role, id, email)
    this.school;
  }

  setSchool = school => this.school = school
  
  getSchool = _ => this.school

}

module.exports = Intern