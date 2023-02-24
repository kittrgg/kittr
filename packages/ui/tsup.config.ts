import { defineConfig, Options } from "tsup"

export default defineConfig((options: Options) => ({
	// treeshake: true,
	// splitting: true,
	entry: ["./index.ts"],
	format: ["esm"],
	dts: true,
	minify: true,
	clean: true,
	external: ["react"],
	...options
}))
