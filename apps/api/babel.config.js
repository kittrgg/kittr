module.exports = {
	env: {
		test: {
			plugins: ["@babel/plugin-transform-modules-commonjs"],
			presets: [
				// I'm not sure what this thing is supposed to be for. It was in the docs...
				// ['@babel/preset-env', {targets: {node: 'current'}}],
				"@babel/preset-typescript"
			]
		}
	}
}
