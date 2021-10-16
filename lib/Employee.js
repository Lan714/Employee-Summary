class Employee {
  constructor () {
    this.name;
    this.role;
    this.id;
    this.email;
  }

  setName = name => this.name = name
  setRole = role => this.role = role
  setID = id => this.id = id
  setEmail = email => this.email = email

  getName = _ => this.name
  getRole = _ => this.role
  getID = _ => this.id
  getEmail = _ => this.email

}
 

module.exports = Employee