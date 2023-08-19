import { execSync } from 'node:child_process';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  name: 'metrics',
  clean: true,
  treeshake: true,
  onSuccess: () => {
    execSync('tsc --emitDeclarationOnly');
  },
});
