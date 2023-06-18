import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'logger',
  target: 'esnext',
  format: 'cjs',
  entry: ['./src/nextjs/index.ts', './src/node/index.ts'],
  clean: true,
});
