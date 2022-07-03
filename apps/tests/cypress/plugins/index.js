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
const { prisma } = require("@kittr/prisma")

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config

	on("task", {
		"db:seed": async () => {
			await prisma.channel.upsert({
				where: {
					displayName: "premiumchannel"
				},
				update: {
					displayName: "premiumchannel"
				},
				create: {
					displayName: "premiumchannel",
					urlSafeName: "premiumchannel",
					games: {
						connect: {
							id: "60da97598821ed46dc9c008c" // Warzone Game ID
						}
					},
					profile: {
						create: {}
					},
					plan: {
						create: {
							type: "PREMIUM"
						}
					},
					managers: {
						createMany: {
							data: [
								{
									firebaseId: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
									role: "OWNER"
								},
								{
									firebaseId: "VeoTKmMs72amUYzPRovBGJDJnGn1",
									role: "EDITOR"
								},
								{
									firebaseId: "XnRFlNNbQ4d3K6nfEIRGBJm5nER2",
									role: "EDITOR"
								}
							]
						}
					}
				}
			})

			return prisma.channel.upsert({
				where: {
					displayName: "thetestchannel"
				},
				update: {
					displayName: "thetestchannel"
				},
				create: {
					displayName: "thetestchannel",
					urlSafeName: "thetestchannel",
					games: {
						connect: {
							id: "60da97598821ed46dc9c008c" // Warzone Game ID
						}
					},
					profile: {
						create: {}
					},
					managers: {
						createMany: {
							data: [
								{
									firebaseId: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
									role: "OWNER"
								},
								{
									firebaseId: "VeoTKmMs72amUYzPRovBGJDJnGn1",
									role: "EDITOR"
								},
								{
									firebaseId: "XnRFlNNbQ4d3K6nfEIRGBJm5nER2",
									role: "EDITOR"
								}
							]
						}
					}
				}
			})
		},
		"db:harvest": async () => {
			return prisma.channel
				.delete({
					where: {
						displayName: "premiumchannel"
					}
				})
				.catch()
		}
	})
}
