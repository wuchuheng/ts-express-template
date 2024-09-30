#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const projectName = process.argv[2];
const currentDir = process.cwd();
const projectDir = path.join(currentDir, projectName);

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx @wuchuheng/express my-app");
  process.exit(1);
}

try {
  fs.mkdirSync(projectDir);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log("Copying project files...");
    await fs.copy(path.join(__dirname, "../template"), projectDir);

    console.log("Installing dependencies...");
    execSync(`cd ${projectDir} && pnpm install && pnpm run build`);

    console.log("The installation is done!");
    console.log(`CD into ${projectName} and run npm start to get started!`);
  } catch (error) {
    console.log(error);
  }
}

main();
