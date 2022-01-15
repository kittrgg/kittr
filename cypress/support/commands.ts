/// <reference path="index.d.ts" />

import { auth } from "./index"

Cypress.Commands.add("login", (email, password) => {
	return auth.signInWithEmailAndPassword(email, password)
})

Cypress.Commands.add("logout", () => {
	return auth.signOut()
})

Cypress.Commands.add("getToken", () => {
	return auth.currentUser?.getIdToken() as Promise<string>
})
