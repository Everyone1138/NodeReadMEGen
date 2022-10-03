// This function attaches the badges and links to the license
function renderLicenseLink(license) {
    const licenseLinks = {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        ISc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        GNUGPLV3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0',
        APACHE: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        TheArtisticLicense: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
        BSD3:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        TheUnlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
        none: 'No license has been assined to this project.'

    }
    return licenseLinks[license] 
}

//this function formats the README file with the users input in appropitate fields.
function readMePageContent(answers) {
    return `

# ${answers.project}

## GitHub license: ${answers.license} 

${renderLicenseLink(answers.license)}

## Description

\`\`\`bash
${answers.description}
\`\`\`

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, fun the following command:

\`\`\`bash
${answers.command}
\`\`\`

## Usage

${answers.repoUsage}

## License

This project is licensed under the ${answers.license} license. For more information on this license click on the badge at the top of the page.

## Contributing

${answers.contriBute}

## Tests

\`\`\`bash
${answers.test}
\`\`\`

## Questions

>Contact infromation:

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find
more of my work at [${answers.github}](https://github.com/${answers.github}).

---

###### ©️ Santiago Campos 2022 ©️
`
};

module.exports = readMePageContent;
