# Welcome to kittr!

# Getting Started

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- If you are on Windows, make sure that you switch your Docker Desktop to Linux containers. You won't be able to spin up the docker compose containers without it!
- [Node.js](https://nodejs.org/en/download/)

## Installation

1. Clone the repo

```
https://github.com/kittrgg/monorepo.git
```

2. Checkout the develop branch

```
git checkout develop
```

3. You will need a Twitch API token to run kittr. Unfortunately, we can't provide you with one since this token is individualized. To get your Twitch token, visit [your Twitch developers console](https://dev.twitch.tv/console/apps) and create an application token. (For the URLs that it asks for, you can use http://localhost:3000.) Make sure you keep the Client Secret that you create in a safe place for the next step!

4. With your token, create a `.env` file at the root of the project by copying the `.env.example` from the project and adding in your Twitch token values.

5. Run `npm dev:install`. IMPORTANT: Notice the `dev`! This will install the dependencies for all of the containers rather than just the root dependencies.

6. Run the docker-compose to bring up the containers to your local host.

```
npm run dev
```

7. If this is your first time developing kittr, you will need to seed your local Mongo instance at this time. To do so, use `npm run dev:seed`. If you got a message saying "Let's get kittd," you are ready to go!

8. Visit kittr at [http://localhost:3000](http://localhost:3000)

## Ports

When working locally, these ports are available:

- Web front-end: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:5000](http://localhost:5000)
- Mongo Express: [http://localhost:5001](http://localhost:5001) (View your Mongo data in your browser!)
- Mongo: http://localhost:27017 (You shouldn't need to interact with this port directly.)

- Firebase Emulator UI: [http://localhost:4000](http://localhost:4000)
- Firebase Auth Emulator: http://localhost:4001 (You shouldn't need to interact with this port directly.)
- Firebase Storage Emulator: http://localhost:4002 (You shouldn't need to interact with this port directly.)

## Contributing

Contributions are encourage from junior and senior developers alike. You may check the issues on this project to find out what needs working on.

PLEASE make sure that before you attempt to make any major changes to kittr that you ask the maintainers first. There is a business vision here that you may not be privvy to. (We will try to make the long-term plans for kittr more accessible as we continue this effort.)

1. Fork the Project
2. Checkout the develop branch (git checkout develop)
3. Create your Feature Branch (git checkout -b new-branch)
4. Commit your Changes (git commit -m 'New Changes') (Please provide the maintainers with a nice commit message to state your intentions on what this commit should include!)
5. Push to the Branch (git push origin new-branch)
6. Open a Pull Request

   [You can find an instructional video on this process here](https://www.youtube.com/watch?v=T9VylI5C0G8&t=32s)

## Notes

- Existing login credentials to get into the dashboard:
  - Username: anthony@dev.com
  - Password: 123123
- A few channels that you may find useful:
  - ALLKITS - Features every kit in the database (well, almost)
  - brandnewchannel - A fresh, empty channel that was just created
  - anthonyshew - A channel that features multiple managers so you can see how the dashboard changes based on the user's role in that channel
