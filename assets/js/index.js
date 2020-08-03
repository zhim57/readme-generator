const inquirer = require("inquirer");

const fs = require("fs");
const markdown = require("./markdown");


const path = require("path");

const questionsArr = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the name of the application?',
        validate: title => {
            if (title.length < 5) {
                return "The input title is too short";
            }
            else {
                return true;
            }
        }

    },

    // description of the application
    {
        type: "input",
        message: "please provide a short description of your application. Minimum 10 words",
        name: "description",
        validate: description => {
            let validation = description.split(" ");
            if (validation.length < 1) {
                return "Description is too short";
            }
            else {
                return true;
            }
        }
    },
    //github username 
    {
        type: 'input',
        name: 'user',
        message: 'What is your name',

    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your username on Github?',

    },
    // asks for a 
    {
        type: 'checkbox',
        message: 'what is the Table of contents',
        name: 'content',
        choices: [
            'Title',
            'Description',
            'Table of Contents',
            'Installation',
            'Usage',
            'License',
            'Contributing',
            'Tests',
            'Questions'
        ]

    },

    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'install',

    },
    // How does a user use your application? 
    {
        type: 'checkbox',
        message: 'How does a user use your application? Which industy will your App target, please tick all that apply:',
        name: 'usage1',
        choices: [
            "Web development/front end",
            "Node.js  application" ,
            "Web development back end", 
            "Database Application"  , 
            "Productivity Application", 
            "iOS App", 
            "Android app", 
            "entertainment application", 
            "Financial App", 
            "transportation application", 
            "other"
        ]

    },

    {
        type: "input",
        message: `if you selected "other" , or wish to add some more info 
        to help your prospective clients to chose you and your app, please povide the information here:`,
        name: 'usage2',
    },
    // How would a user of this application report an issue, or make a contribution to it? 
    {
        type: 'email',
        message: 'What is your email address?',
        name: 'appEmail',

    },
    // promts what license/and badge would be included ? 

    {
        type: 'input',
        message: 'What license badge would you like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',

    },

    //Asks the user who else contributed to their application 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',

    },
    //Asks the user what tests have been applied during the development of their application 
    {
        type: 'input',
        message: 'What tests did you run on your application, if none , you can type :"none" ',
        name: 'tests',

    },
    {
        type: 'input',
        message: 'Please provide the name of your Github Repository?',
        name: 'repoName',
        validate: repoName => {
            if (repoName.length < 1) {
                return "The reponame is obligatory";
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please copy and paste here the link to the portfolio',
        name: 'link1',

    },
    {
        type: 'input',
        message: 'Please copy and paste here the link to the deployed application',
        name: 'link2',

    },

    {
        type: 'input',
        message: 'Please place your first image filename  path here, if no image, please enter"no"',
        name: 'image1',
        validate: image1 => {
            if (image1 === "") {
                return "Please recheck , seems nothing entered";
            }
            else {
                return true;
            }
        }

    },
    {
        type: 'input',
        message: 'Please place your second image filename  path here,if no image, please enter"no"',
        name: 'image2',
        validate: image2 => {
            if (image2 === "") {
                return "Please recheck , seems nothing entered";
            }
            else {
                return true;
            }
        }

    },
];



// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function start() {
    inquirer.prompt(questionsArr)
    .then((response) => {
  
        console.log("Creating README.md");
            writeToFile("README.md", markdown({ ...response }))
           
        });
}
// the function call 
start();


















//![GitHub](https://img.shields.io/github/license/zhim57/readme-generator)


//<img alt="GitHub" src="https://img.shields.io/github/license/zhim57/readme-generator"></img>