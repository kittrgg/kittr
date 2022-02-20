const makeModuleNameMapper = (srcPath, tsconfigPath) => {
	const { paths } = require(tsconfigPath).compilerOptions

	const aliases = {}

	// Iterate over paths and convert them into moduleNameMapper format
	Object.keys(paths).forEach((item) => {
		const key = item.replace("/*", "/(.*)")
		const path = paths[item][0].replace("/*", "/$1")
		aliases[key] = "<rootDir>" + srcPath + "/" + path
	})

	return aliases
}

const TS_CONFIG_PATH = "./tsconfig.json"
const SRC_PATH = "./src"

module.exports = {
	testEnvironment: "node",
	coveragePathIgnorePatterns: ["./node_modules/"],
	roots: [SRC_PATH],
	clearMocks: true,
	transform: {
		"^.+\\.ts?$": "ts-jest"
	},
	moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH)
}
