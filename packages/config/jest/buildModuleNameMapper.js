/** Create the absolute paths for the project inside of its Jest tests.
 *
 * @param {string} srcPath - The absolute path to the project's source code. default: `"./src"`
 * @param {string} tsConfig - The absolute path to the project's tsconfig.json file. default: `"./tsconfig.json"`
 */
const buildModuleNameMapper = (srcPath, tsConfig) => {
	const { paths } = tsConfig.compilerOptions

	const aliases = {}

	// Iterate over paths and convert them into moduleNameMapper format
	Object.keys(paths || {}).forEach((item) => {
		const key = item.replace("/*", "/(.*)")
		const path = paths[item][0].replace("/*", "/$1")
		aliases[key] = "<rootDir>" + srcPath + "/" + path
	})

	return aliases
}

module.exports = {
	buildModuleNameMapper
}
