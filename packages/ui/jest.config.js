const buildModuleNameMapper =
	require("@kittr/config/jest/buildModuleNameMapper").buildModuleNameMapper

const SRC_PATH = "./src"
const TS_CONFIG_PATH = require("./tsconfig.json")

module.exports = {
	...require("@kittr/config/jest/common"),
	testEnvironment: "jest-environment-jsdom",
	roots: [SRC_PATH],
	preset: "",
	moduleNameMapper: buildModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}
