/**
 * We use this function to bootstrap out environment variables for our development environment
 *
 * This copies the ./environments/.env.local to ./env.local at the top level for NextJS to use
 */

// const fs = require("fs")

// fs.access("./.next", (error) => {
// 	if (error) {
// 		console.log("./.next does not exist.")
// 	} else {
// 		fs.rmdirSync("./.next", { recursive: true, force: true })
// 	}
// })

// fs.copyFile("./environments/.env.local", "./.env.local", (err) => {
// 	if (err) {
// 		console.log("Failed to copy .env.local", err)
// 	} else {
// 		console.log("Copied .env.local environment")
// 	}
// })
