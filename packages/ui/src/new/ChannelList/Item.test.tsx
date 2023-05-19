import { render, screen, waitFor } from '@testing-library/react';
import { playerData } from '@kittr/fixtures';
import { ChannelListItem } from './Item';

describe('<ChannelListItem />', () => {
  const fixture = playerData[0];

  test('mounts', () => {
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

  test('shows channel name', () => {
    render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    expect(screen.getByText(fixture.name));
  });

  test('social SVGs have title', () => {
    render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    expect(screen.getByTitle('Twitch'));
  });

  test('has image alt', async () => {
    render(
      <ChannelListItem
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
        socials={fixture.socials}
      />,
    );

    await waitFor(() => expect(screen.findByAltText(fixture.name)).resolves);
  });
});
