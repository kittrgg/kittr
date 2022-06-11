---
sidebar_position: 1
---

# Introduction

## The Scripts You Need to Succeed

Before you can do anything useful:

- Install the required packages: `yarn install`
- Establish your environment variables:
  - To do this, visit /scripts/createEnvironment/inputs.
  - Make a file called `dev.env.json`.
  - Use the example template and fill the needed values.

## Your Daily Drivers

`yarn dx`: Builds up the development environment including a Docker containers.

`yarn dx:db-seed`: Uses the seed data found in /packages/prisma/seed.ts.

`yarn dx:db-view`: Open up an in-browser database viewer.

`yarn db-snapshot`: Creates a snapshot of the current database and saves it in your local file system.

`yarn dx:seed-snapshot`: Uses the snapshot from `yarn db-snapshot` to overwrite your current database.

`yarn dx:db-nuke`: If you for some reason need to reset any Docker data, you can remove it all here.

---

## Codebase Health

`yarn type-check`: Runs a TypeScript check against the entire repository letting you know if you've made any mistakes.

`yarn lint`: Runs a linter against the entire repository letting you know if you've been messy.

`yarn format`: Formats the entire repository according to Prettier. (Currently rather useless)

---

## Helpers

These are not need-to-know but may be useful if something has gone wrong.

`yarn kill-ports`: If your ports did not clear when you took down your environment, you can use this command to clear them manually.

`yarn clean`: rm -rf all of the builds, artifacts, and node_modules in your repository.

`yarn env:clear`: Clears the environment variables from the apps and Prisma.

`yarn env:prisma`: Sets the environment variables for Prisma. Useful for giving Prisma the necessary variables for its scripts.

`yarn env:local-prod`: Sets environment variables for creating a local build of the project.

`yarn env:dev`: Sets the environment variables for local development using your inputs and runs the docker-compose.

---

## Build pipeline scripts

`yarn build`: Generates a build for every app and package in the repo.

`yarn test`: Runs unit tests for every app and package in the repo.

`yarn test:e2e`: Runs end-to-end tests for the repository. (Not sure if this is for CI or local...)
