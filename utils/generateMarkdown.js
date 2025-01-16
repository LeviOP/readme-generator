function renderLicenseBadge(license) {
    if (!license) return "";
    return `[![${license.name}](${license.shield})](${license.link})`
}

function renderLicenseLink(license) {
    if (!license) return "";
    return `[${license.name}](${license.link})`;
}

function renderLicenseSection(license) {
    if (!license) return "";
    return `This project uses the ${renderLicenseLink(license)} license.`;
}

function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

- [${data.username}](https://github.com/${data.username})
- [${data.email}](mailto:${data.email})`;
}

export default generateMarkdown;
