/**
 * We use this function to bootstrap out environment variables for our development environment
 *
 * This copies the ./environments/.env.test to ./env.local at the top level for our testing
 * environment to use. This includes the localhost build serving the app and cypress
 */

// const fs = require("fs")

// fs.access("./.next", (error) => {
// 	if (error) {
// 		console.log("./.next does not exist.")
// 	} else {
// 		fs.rmdirSync("./.next", { recursive: true, force: true })
// 	}
// })

// fs.copyFile("./environments/.env.test", "./.env.local", (err) => {
// 	if (err) {
// 		console.log("Failed to copy .env.test", err)
// 	} else {
// 		console.log("Copied .env.test environment")
// 	}
// })
