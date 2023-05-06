import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

describe('<HelloWorld />', () => {
  test('Mounts', () => {
    const wrapper = render(<HelloWorld />);
    expect(wrapper).toBeTruthy();

    screen.getByText('hello world');
  });
});
