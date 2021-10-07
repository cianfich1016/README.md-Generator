// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  Contributors to the project were: ${data.contributors}

  ## License
  The license required for this project is ${data.license}.

  ## Contact
  With any questions or concerns, please contact me via GitHub at [${data.name}](${data.github}) or by email at ${data.email}.

`;
}

module.exports = generateMarkdown;
