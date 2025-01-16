import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

import { writeFile } from "node:fs/promises";
import licenses from "./utils/licenses.js";

/** @type Array<import("inquirer").Question> */
const questions = [
    {
        name: "title",
        message: "Project title?"
    },
    {
        name: "description",
        message: "Project description?"
    },
    {
        name: "installation",
        message: "Installation instructions"
    },
    {
        name: "usage",
        message: "Usage information?"
    },
    {
        name: "contributing",
        message: "Contribution guidelines?"
    },
    {
        name: "tests",
        message: "Test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "License?",
        choices: licenses.map(license => ({ name: license.name, value: license })),
        loop: false
    },
    {
        name: "username",
        message: "GitHub username?"
    },
    {
        name: "email",
        message: "Email?"
    }
];

async function writeToFile(fileName, data) {
    await writeFile(fileName, data);
}

async function init() {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    await writeToFile("README.md", markdown);
}

init();
