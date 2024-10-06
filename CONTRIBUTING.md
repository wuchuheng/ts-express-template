# Contributing to @wuchuheng/express

We appreciate your interest in contributing to @wuchuheng/express. This document provides guidelines for contributing to the project, with a focus on how to release new versions.

## How to Contribute

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Submit a pull request

## Releasing a New Version

To release a new version of @wuchuheng/express, follow these steps:

1. Ensure all tests pass and the code is up to date with the main branch.

2. Update the version number in `package.json` according to semantic versioning principles.

3. Update the `CHANGELOG.md` file with details of the changes in the new version.

4. Commit these changes with a message like "Bump version to x.x.x".

5. Create a new tag for the version:

   ```
   git tag -a vx.x.x -m "Version x.x.x"
   ```

6. Push the changes and the new tag to GitHub:

   ```
   git push origin main
   git push origin vx.x.x
   ```

7. The GitHub Actions workflow will automatically build and publish the new version to npm.

8. After the release, update the `README.md` file if necessary with any new features or changes.

Please ensure you have the necessary permissions to push to the main branch and create releases. If you don't, please contact a project maintainer.

Thank you for your contributions to @wuchuheng/express!
