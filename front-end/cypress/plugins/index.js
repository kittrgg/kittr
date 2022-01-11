/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

require("dotenv").config({ path: ".env.local" })

module.exports = (on, config) => {
	require("@cypress/code-coverage/task")(on, config)

	config.env.DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
	config.env.NEXT_PUBLIC_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
	config.env.NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY
	config.env.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID
	config.env.FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN
	config.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
	config.env.FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL
	config.env.FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID
	config.env.FIREBASE_APP_ID = process.env.FIREBASE_APP_ID
	config.env.FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID
	config.env.FIREBASE_COOKIE_SECRET_PREVIOUS = process.env.FIREBASE_COOKIE_SECRET_PREVIOUS
	config.env.FIREBASE_COOKIE_SECRET_CURRENT = process.env.FIREBASE_COOKIE_SECRET_CURRENT
	config.env.GOOGLE_APPLICATION_CREDENTIALS = {}
	config.env.NEXT_PUBLIC_SOCKET_HOST = process.env.NEXT_PUBLIC_SOCKET_HOST

	return config
}
