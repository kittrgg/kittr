// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />
import reactPlugin from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactPlugin()]
	// test: {
	//   globals: true,
	//   environment: "jsdom",
	//   setupFiles: "./src/utils/setup.ts"
	// }}
})
