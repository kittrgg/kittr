/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		login: (email: string, password: string) => Promise<firebase.default.auth.UserCredential>
		logout: () => Promise<void>
		getToken: () => Promise<string>
	}
}
