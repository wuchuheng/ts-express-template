#!/usr/bin/env node

const fs = require("fs");
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

async function main() {
  try {
    console.log("Copying project files...");
    await copyDir(path.join(__dirname, "../template"), projectDir);

    console.log("Installing dependencies...");
    execSync(`cd ${projectDir} && pnpm install && pnpm run build`);

    console.log("The installation is done!");
    console.log(`
Done. Now run:
cd vue-tmp
pnpm install
pnpm format
pnpm dev
`);
  } catch (error) {
    console.error("An error occurred:", error.message);
    process.exit(1);
  }
}

// Helper function to copy directory recursively
function copyDir(src, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dest, { recursive: true }, (err) => {
      if (err) return reject(err);

      fs.readdir(src, { withFileTypes: true }, (err, entries) => {
        if (err) return reject(err);

        let completed = 0;
        if (entries.length === 0) resolve();

        entries.forEach((entry) => {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);

          if (entry.isDirectory()) {
            copyDir(srcPath, destPath)
              .then(() => {
                if (++completed === entries.length) resolve();
              })
              .catch(reject);
          } else {
            fs.copyFile(srcPath, destPath, (err) => {
              if (err) return reject(err);
              if (++completed === entries.length) resolve();
            });
          }
        });
      });
    });
  });
}

main();
