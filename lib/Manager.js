const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, role, id, email) {
    super(name, role, id, email);
    this.officeNumber;
  }

  setOfficeNumber = number => this.officeNumber = number

  getOfficeNumber = _ => this.officeNumber

}

module.exports = Manager