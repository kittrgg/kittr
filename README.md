# Welcome to kittr

# How to Use

## "I want to develop kittr."

`npm run dev`
You may also `npm run dev -- -d` if you don't care about seeing logs.

- To seed the firebase-emulators, you will need to shell into the `web` docker container and use `npm run emulators:seed`.

## "I'm helping with the Dockerfiles."

`npm run dev:build` may be useful to you.

You may also `npm run dev:build -- -d` if you don't care about seeing logs.

## Ports

- Web front-end: 3000
- API: 5000
- Mongo: 27017 (You shouldn't need to interact with this directly.)

Firebase:

- UI: 4000
- Auth: 4001
- Storage: 4002

## Developer Notes

- You may set environment variables in a `.env` file at the top of the file. The example file already includes the proper firebase-emulators ports. You will need variables for everything but the Stripe stuff for now (until we need to do more Stripe developmenting).
- If you are on Windows, make sure that you switch your Docker desktop to Linux containers. You won't be able to spin up the docker compose containers without it!
