# kittr Front-End

## Setup

To install npm dependencies:

```
npm install
```

The kittr frontend is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To start the frontend, run:

```
npm start
```

This command brings up the frontend on [http://localhost:3000](http://localhost:3000)

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

`NOTE: You will need environment variables included in the frontend inside of an .env.local file at the root of the project. You will need to ask Anthony Shew for these environment variables as they are private.`

## API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be edited in `pages/api/**`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing

We run cypress integration tests at the moment. A note with these is to make sure that the app is being served and the emulators are running before running the cypress tests. Additionally, a script is ran before the build process of these commands that replaces the `.env.local` file contents with test environment variables.

To run the Cypress UI after building the app and running emulators:

```
npm run build:test-open
```

To run Cypress in the terminal after building the app and running emulators:

```
npm run build:build:test-run
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
