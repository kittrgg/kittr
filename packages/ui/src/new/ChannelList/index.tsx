import { ChannelListItem } from './Item';

export interface ChannelListItemProps {
  id: string;
  name: string;
  urlSafeName: string;
}

export interface ChannelListProps {
  // Typed copied from next/link internals
  linkComponent: React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
      React.RefAttributes<HTMLAnchorElement> & {
        children?: React.ReactNode;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } & { href: any }
  >;
  linkBasePath: string;
  channels: ChannelListItemProps[];
}

export const ChannelList = ({
  channels,
  linkBasePath,
  linkComponent,
}: ChannelListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {channels.map((channel) => {
        return (
          <ChannelListItem
            linkComponent={linkComponent}
            linkBasePath={linkBasePath}
            key={channel.name}
            {...channel}
          />
        );
      })}
    </div>
  );
};
