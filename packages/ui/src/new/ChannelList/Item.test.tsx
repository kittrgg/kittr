import { render, screen, waitFor } from '@testing-library/react';
import { playerData } from '@kittr/fixtures';
import { forwardRef } from 'react';
import { ChannelListItem } from './Item';

const Link = forwardRef((props) => <a {...props} />);

describe('<ChannelListItem />', () => {
  const fixture = playerData[0];

  test('mounts', () => {
    const view = render(
      <ChannelListItem
        linkBasePath="test"
        linkComponent={Link as any}
        name={fixture.name}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
      />,
    );

    expect(view);
  });

  test('shows channel name', () => {
    render(
      <ChannelListItem
        name={fixture.name}
        linkBasePath="test"
        linkComponent={Link as any}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
      />,
    );

    expect(screen.getByText(fixture.name));
  });

  test('has image alt', async () => {
    render(
      <ChannelListItem
        name={fixture.name}
        linkBasePath="test"
        linkComponent={Link as any}
        imagePath={fixture.imagePath}
        urlSafeName={fixture.urlSafeName}
      />,
    );

    await waitFor(() => expect(screen.findByAltText(fixture.name)).resolves);
  });
});
