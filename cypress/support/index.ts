// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // Only apiKey is needed when using an emulator
  apiKey: process.env.NEXT_PUBLIC_API_KEY || Cypress.env("NEXT_PUBLIC_API_KEY"),
  projectId: "dev",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
auth.useEmulator(`http://localhost:4001`);

before(() => {
  cy.request("POST", "http://localhost:3000/api/admin/cypress/user");

  cy.request("POST", "http://localhost:3000/api/admin/cypress/seedDatabase");
});
