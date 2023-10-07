import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator('UI component', {
		description: 'Add a component to the UI kit.',
		prompts: [
			{
				type: 'input',
				name: 'component',
				message: 'What is the name of your component?',
			},
		],
		actions: [
			{
				type: 'add',
				path: '{{ turbo.paths.root }}/packages/ui/src/new/{{ component }}/index.tsx',
				templateFile: 'templates/component.hbs',
			},
			{
				type: 'add',
				path: '{{ turbo.paths.root }}/packages/ui/src/new/{{ component }}/index.test.tsx',
				templateFile: 'templates/test.hbs',
			},
		],
	});
}
