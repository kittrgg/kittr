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

const {
	seedBasicUser,
	removeBasicUser,
	seedPremiumUser,
	removePremiumUser
} = require("./seed")

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config

	on("task", {
		"db:seed-basic-user": async () => {
			return seedBasicUser().finally(async () => prisma.$disconnect())
		},
		"db:remove-basic-user": async () => {
			return removeBasicUser().finally(async () => prisma.$disconnect())
		},
		"db:seed-premium-user": async () => {
			return seedPremiumUser().finally(async () => prisma.$disconnect())
		},
		"db:remove-premium-user": async () => {
			return removePremiumUser().finally(async () => prisma.$disconnect())
		}
	})
}
