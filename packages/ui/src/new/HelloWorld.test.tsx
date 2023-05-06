import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

describe('<HelloWorld />', () => {
  test('Mounts', () => {
    const view = render(<HelloWorld />);
    expect(view).toBeTruthy();

    screen.getByText('hello world');
  });
});
