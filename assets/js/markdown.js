







  // function to generate the markdown template
  function markdown(data) {
    // data.content.map(contentname => contentname).join('\n');
    // data.usage1.map(usage1name => usage1name.join('\n'));
    return `# ${data.repoName}
## Description
Author: ${data.user}

${data.description}

Github User name: ${data.userName}

## Table of Contents:
${data.content.map(contentname =>`- ${contentname}`).join("\n")}

## Installation
${data.install}
## Usage
${data.usage1.map(usage1name =>`- ${usage1name}`).join("\n")}
${data.usage2}
## Email
${data.appEmail}
## Contributing
${data.contributors}
## License
![GitHub](https://img.shields.io/github/license/${data.userName}/${data.repoName})

## Tests

## Questions
please email ${data.user} with any questions at: ${data.appEmail}. Thank You.

## Links

[link to this portfolio](${data.link1})

[link to the deployed application](${data.user2})
  

## Screenshots

![screenshot no.1 of the working application](../../assets/images${data.image1})

![screenshot no.2 of the working application](../../assets/images${data.image2})


  `};
  
  
  module.exports =     markdown;