require("dotenv").config()
const fs = require("fs")
const { stringify } = require("envfile")
const path = require("path")
const environmentVars = require(path.join(__dirname, "/inputs.js"))

const main = async () => {
	const apps = environmentVars.apps
	const packages = environmentVars.packages

	for (const appName of Object.keys(apps)) {
		console.log(`Creating app env for ${appName}...`)
		fs.writeFile(`./apps/${appName}/.env`, stringify(apps[appName]), () => {})
		console.log(`Nice, ./apps/${appName}/.env is written.`)
	}

	for (const packageName of Object.keys(packages)) {
		console.log(`Creating package env for ${packageName}...`)
		fs.writeFile(
			`./packages/${packageName}/.env`,
			stringify(packages[packageName]),
			() => {}
		)
		console.log(`Nice, ./packages/${packageName}/.env is written.`)
	}
}

main()
	.then(() => {
		console.log("See developer develop.")
	})
	.catch((err) => {
		console.error(err)
		process.exit(0)
	})
