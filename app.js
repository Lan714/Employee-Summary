const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { prompt } = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./lib/htmlRender")

let employeeInformation = []

const renderEmployees = () => {

  fs.writeFile('./output/team.html', render(employeeInformation), error => {
    if (error) { console.log(error) }
  })
}

const createIntern = (name, title, id, email) => {

  prompt([
    {
      type: 'input',
      name: 'internSchool',
      message: `Enter the current school that ${name} is attending:`
    }
  ])
  .then(({ internSchool }) => {

    let intern = new Intern()
    intern.setName(name)
    intern.setRole(title)
    intern.setID(id)
    intern.setEmail(email)
    intern.setSchool(internSchool)

    employeeInformation.push(intern)

    prompt([
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another employee?:'
      }
    ])
    .then(({ addAnother }) => addAnother === true ? mainMenu() : renderEmployees())
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
}

const createEngineer = (name, title, id, email) => {

  prompt([
    {
    type: 'input'
    name: 'engineerLink',
    message: `Enter ${name}'s GitHub username:`
    }
  ])
  .then(({ engineerLink }) => {
    let engineer = new Engineer()
    engineer.setName(name)
    engineer.setRole(title)
    engineer.setID(id)
    engineer.setEmail(email)
    engineer.setGithub(engineerLink)

    employeeInformation.push(engineer)
     
    prompt([
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another employee?:'
      }
    ])
      .then(({ addAnother }) => addAnother === true ? mainMenu() : renderEmployees())
      .catch(error => console.log(error))
  })
    .catch(error => console.log(error))
}

const createManager = (name, role, id, email) => {

  prompt([
    {
      type: 'input'
      name: 'managerNumber',
      message: `Enter ${name}'s office #:`
    }
  ])
    .then(({ managerNumber }) => {
      let manager = new Manager()
      manager.setName(name)
      manager.setRole(role)
      manager.setID(id)
      manager.setEmail(email)
      manager.setGithub(managerNumber)

      employeeInformation.push(manager)

      prompt([
        {
          type: 'confirm',
          name: 'addAnother',
          message: 'Would you like to add another employee?:'
        }
      ])
        .then(({ addAnother }) => addAnother === true ? mainMenu() : renderEmployees())
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
}

const createNewEmployee = employeeTitle => {

  prompt([
    {
      type: 'input'
      name: 'employeeName',
      message: `Enter new employee's name:`
    },
    {
      type: 'input'
      name: 'employeeID',
      message: `Enter new employee's ID #:`
    },
    {
      type: 'input'
      name: 'employeeEmail',
      message: `Enter new employee's e-mail:`
    }
  ])
    .then(({ employeeName, employeeID, employeeEmail }) => {
      switch (employeeTitle) {
        case 'Manager':
          createManager(employeeName, employeeTitle, employeeID, employeeEmail)
          break
        case 'Engineer':
          createManager(employeeName, employeeTitle, employeeID, employeeEmail)
          break
        case 'Intern':
          createManager(employeeName, employeeTitle, employeeID, employeeEmail)
          break
          default:
            console.log('Program termintaing')
            process.exit()
      }
    })
    .catch(error => console.log(error))
}

const employeeChoices = ['Manger', 'Engineer', 'Intern', 'Exit']

const mainMenu = () => {
   
  prompt ([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Select an employee type.',
      choices: employeeChoices
    }
  ])
  .then(({ menuChoice }) => !== 'Exit' ? createNewEmployee(menuChoice) : console.log('Goodbye!'))
  .catch(error => console.log(error)) 

}

mainMenu()
