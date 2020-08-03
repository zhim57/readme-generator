const inquirer = require("inquirer");
const questionsArr = require("./questions");
const fs = require("fs");
const markdown = require("./markdown");
const path = require("path");




// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questionsArr)
    .then((response) => {
        // let str1="\n";


    // const map1 =  response.content.map(contentname => contentname.concat("",str1));
    // response.content=map1;
        console.log("Creating README.md");
            writeToFile("README.md", markdown({ ...response }));
            // this will create the first line and title  
            fs.appendFileSync("README.md", ("# " + response.repoName) + '\n', function (error) {

                if (error) {
                    console.log(error)
                }
                else {
                    console.log("Successfully appended")
                }
            });
        });
}
// the function call 
init();


















//![GitHub](https://img.shields.io/github/license/zhim57/readme-generator)


//<img alt="GitHub" src="https://img.shields.io/github/license/zhim57/readme-generator"></img>