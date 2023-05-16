import { describe, test, expect } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Avatar, AvatarFallback, AvatarImage } from '.';

describe('<Avatar />', () => {
  test('Mounts', () => {
    const view = render(
      <Avatar key="avatar">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );

    expect(view).toBeTruthy();
    screen.getByText('CN');
    waitForElementToBeRemoved(screen.getByText('CN'));
    screen.findByAltText('@shadcn');
  });
});