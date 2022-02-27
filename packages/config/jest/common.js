module.exports = {
	clearMocks: true,
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	preset: "ts-jest",
	testEnvironment: "node",
	testPathIgnorePatterns: ["<rootDir>/node_modules/"],
	moduleDirectories: ["node_modules"]
}
