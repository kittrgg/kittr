const buildModuleNameMapper =
	require("@kittr/config/jest/buildModuleNameMapper").buildModuleNameMapper

const srcPath = "./src"
const tsConfig = require("./tsconfig.json")

module.exports = {
	...require("@kittr/config/jest/common"),
	moduleNameMapper: buildModuleNameMapper(srcPath, tsConfig)
}
