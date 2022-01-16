# Welcome to kittr

# How to Use

## Create new images for development

`npm run dev:build`

You may also `npm run dev:build -- -d` if you don't care about seeing logs.

## Use the existing image

`npm run dev`
You may also `npm run dev -- -d` if you don't care about seeing logs.

- To seed the firebase-emulators, you will need to shell into the `web` docker container and use `npm run emulators:seed`.

## Ports

- Web front-end: 3000
- API: 5000

Firebase:

- UI: 4000
- Auth: 4001
- Storage: 4002

## Developer Notes

- You may set environment variables in a `.env` file at the top of the file. The example file already includes the proper firebase-emulators ports. You will need variables for everything but the Stripe stuff for now (until we need to do more Stripe developmenting).
- To run the E2E tests, you will need to `cd web` and run `npm run build`. Then, back out and run the testing compose.

## Dev Environment Needed Improvements:

- Automatic firebase-emulators seeding
- Local mongodb instance
