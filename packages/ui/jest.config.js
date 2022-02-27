const buildModuleNameMapper =
	require("@kittr/config/jest/buildModuleNameMapper").buildModuleNameMapper

const SRC_PATH = "./src"
const TS_CONFIG_PATH = "./tsconfig.json"

module.exports = {
	testEnvironment: "jest-environment-jsdom",
	testPathIgnorePatterns: ["<rootDir>/node_modules/"],
	roots: [SRC_PATH],
	clearMocks: true,
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: buildModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}
