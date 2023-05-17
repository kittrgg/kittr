import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { playerData } from '@kittr/fixtures';
import { ChannelList, ChannelListItem } from '.';

describe('<ChannelListItem />', () => {
  const fixture = playerData[0];

  test('Mounts', () => {
    const view = render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    expect(view);
  });

  test('Shows channel name', () => {
    render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    screen.getByText(fixture.name);
  });

  test('Social SVGs have title', () => {
    render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    screen.getByTitle('Twitch');
  });

  test('Has image alt', () => {
    render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    expect(screen.findByAltText(fixture.name)).resolves;
  });
});
