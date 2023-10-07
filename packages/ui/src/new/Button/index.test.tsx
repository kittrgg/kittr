import { render } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
	test('mounts', () => {
		const view = render(<Button />);

		expect(view);
	});
});
