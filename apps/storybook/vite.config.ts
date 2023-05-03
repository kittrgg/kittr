/// <reference types="vite/client" />
import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin()],
  // Test: {
  //   Globals: true,
  //   Environment: "jsdom",
  //   SetupFiles: "./src/utils/setup.ts"
  // }}
});
