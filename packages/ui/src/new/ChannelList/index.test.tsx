import { forwardRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { playerData } from '@kittr/fixtures';
import { ChannelList } from '.';

const Link = forwardRef((props) => <a {...props} />);

describe('<ChannelList />', () => {
  const fixture = playerData[0];

  test('mounts', () => {
    const view = render(
      <ChannelList
        channelList={playerData}
        linkComponent={Link as any}
        linkBasePath="test"
      />,
    );
    expect(view);
  });

  test('shows channel name', () => {
    render(
      <ChannelList
        channelList={playerData}
        linkComponent={Link as any}
        linkBasePath="any"
      />,
    );

    expect(screen.getByText(fixture.name));
  });

  test('has image alt', async () => {
    render(
      <ChannelList
        channelList={playerData}
        linkComponent={Link as any}
        linkBasePath="test"
      />,
    );

    await waitFor(() => expect(screen.findByAltText(fixture.name)).resolves);
  });
});
