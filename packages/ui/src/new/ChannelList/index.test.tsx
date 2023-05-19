import { render, screen, waitFor } from '@testing-library/react';
import { playerData } from '@kittr/fixtures';
import { ChannelList } from '.';

describe('<ChannelList />', () => {
  const fixture = playerData[0];

  test('mounts', () => {
    const view = render(<ChannelList channelList={playerData} />);
    expect(view);
  });

  test('shows channel name', () => {
    render(<ChannelList channelList={playerData} />);

    expect(screen.getByText(fixture.name));
  });

  test('social SVGs have title', () => {
    render(<ChannelList channelList={playerData} />);

    expect(screen.getAllByTitle('Twitch')).toHaveLength(playerData.length);
  });

  test('has image alt', async () => {
    render(<ChannelList channelList={playerData} />);

    await waitFor(() => expect(screen.findByAltText(fixture.name)).resolves);
  });
});
