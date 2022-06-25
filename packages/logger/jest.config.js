const srcPath = "./src"
const tsConfig = require("./tsconfig.json")

module.exports = {
	moduleNameMapper: buildModuleNameMapper(srcPath, tsConfig)
}
