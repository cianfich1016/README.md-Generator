// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch(license){
    case "GNU AGPLv3":
      badge = "![GNU AGPLv3 License Badge](https://img.shields.io/badge/License-GNU_AGPLv3-yellow)";
      break;
    case "GNU GPLv3":
      badge = "![GNU GPLv3 License Badge](https://img.shields.io/badge/License-GNU_GPLv3-yellowgreen)";
      break;
    case "GNU LGPLv3":
      badge = "![GNU LGPLv3 License Badge](https://img.shields.io/badge/License-GNU_LGPLv3-green)";
      break;
    case "Mozilla Public License 2.0":
      badge = "![Mozilla Public License 2.0 License Badge](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-orange)";
      break;
    case "Apache License 2.0":
      badge = "![Apache License 2.0 License Badge](https://img.shields.io/badge/License-Apache_License_2.0-red)";
      break;
    case "MIT License":
      badge = "![MIT License Badge](https://img.shields.io/badge/License-MIT_License-blue)";
      break;
    case "Boost Software License 1.0":
      badge = "![Boost Software License 1.0 License Badge](https://img.shields.io/badge/License-Boost_Software_License_1.0-lightgrey)";
      break;
    case "The Unlicense":
      badge = "![The Unlicense License Badge](https://img.shields.io/badge/License-The_Unlicense-brightgreen)";
      break;
    default:
      badge = "";   
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "GNU AGPLv3":
      writing = "[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)";
      break;
    case "GNU GPLv3":
      writing = "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
      break;
    case "GNU LGPLv3":
      writing = "[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)";
      break;  
    case "Mozilla Public License 2.0":
      writing = "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
      break;  
    case "Apache License 2.0":
      writing = "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";
      break;  
    case "MIT License":
      writing = "[MIT License](https://choosealicense.com/licenses/mit/)";
      break; 
    case "Boost Software License 1.0":
      writing = "[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)";
      break; 
    case "The Unlicense":
      writing = "[The Unlicense](https://choosealicense.com/licenses/unlicense/)";
      break;     
    default:
      writing = "";   
      break;
  }
  return writing;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `

  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Credits
  Contributors to the project: ${data.contributors}

  ## License
  License for this project: ${renderLicenseSection(data.license)}

  ## Contact
  With any questions or concerns, please contact me via GitHub at [${data.name}](${data.github}) or by email at ${data.email}.

`;
}

module.exports = generateMarkdown;
