const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function appMenu() {

    function createManager() {
        console.log("Please build your team");
        inquirer.prompt({
        //
        //YOUR CODE HERE:
        //CREATE OBJECTS OF QUESTIONS HERE FOR MANAGER
        //
        }).then(answers => {
            const manager = new Manager(answers.manangerName, answers.manangerId, answers.managersEmail, answers.managerOfficeNumber):
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            fs.createReadStream();
        });
    }

    function createTeam() {

        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Whcih type of team memeber would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members",
                ]

        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
    }

    function addEngineer() {
        inquirer.prompt([
            //
            //YOUR CODE HERE
            //CREATE OBJECTS OF QUESTIONS FOR ENGINEER
            //
        ]).then(answers => {
            //
            //YOUR CODE HERE
            //1. CREATE A VARIABLE TO STORE THE ENGINEER OBJECTS INSTANTIATED WITH THE INTERN CLASS, PASSING ANSWERS PROPERTIES AS INPUT TO THE INTERN CLASS CONSTRUCTOR
            //2. ADD (PUSH) THE ENINGEER VARIABLE TO the teamMembers ARRAY
            //3. ADD (PUSH) THE ENINGEER ID TO THE idArray ARRAY
            //
            
            createteaM();
        });
    }

    function addIntern() {
        inquirer.prompt([
            //
            //YOUR CODE HERE
            //CREATE OBJECTS OF QUESTIONS FOR ENGINEER
            //
        ]).then(answers => {
            //
            //YOUR CODE HERE
            //1. CREATE A VARIABLE TO STORE THE INTERN OBJECTS INSTANTIATED WITH THE INTERN CLASS, PASSING ANSWERS PROPERTIES AS INPUT TO THE INTERN CLASS CONSTRUCTOR
            //2. ADD (PUSH) THE INTERN VARIABLE TO the teamMembers ARRAY
            //3. ADD (PUSH) THE INTERN ID TO THE idArray ARRAY
            //
            
            createteaM();
        });
    }

}
