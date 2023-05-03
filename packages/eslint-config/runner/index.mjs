#!/usr/bin/env node
import { ESLint } from "eslint"
import { globby } from 'globby'

const main = async () => {
  const args = process.argv.slice(2);
  const isFix = args.includes('--fix');
  const dirsAndGlobs = args.filter((arg) => !arg.startsWith('-'));
  // Ensure all dirs are valid globs.
  const extensions = ['cjs', 'js', 'jsx', 'mjs', 'ts', 'tsx'];
  const defaultGlob = `**/*.{${extensions.join(',')}}`;
  const globs = dirsAndGlobs.length
    ? dirsAndGlobs.map((dirOrGlob) =>
        extensions.some((ext) => dirOrGlob.endsWith(`.${ext}`))
          ? dirOrGlob
          : `${dirOrGlob}/${defaultGlob}`,
      )
    : [defaultGlob];

    const eslint = new ESLint({
      useEslintrc: true,
      fix: isFix
    });

  const { ignorePatterns } = await eslint.calculateConfigForFile('*');

  const files = await globby(globs, {
    dot: true,
    ignore: ignorePatterns,
  });

  let totalIssues = 0

  for await (const file of files) {
    const [result] = await eslint.lintFiles(file);
    await ESLint.outputFixes([result])

    if (result.filePath.includes("node_modules")) return

    if (result.errorCount || result.warningCount) {
      console.log(`> Error(s) in: ${result.filePath}`)
      result.messages.forEach(message => {
        totalIssues++
        console.log(`>> Line ${message.line}, column ${message.column}: ${message.ruleId ?? "ruleId missing?"}`)
        console.log(`  ${message.message}\n`)
      })
  }
}
console.log(`Total issues: ${totalIssues}`)
}

 await main()