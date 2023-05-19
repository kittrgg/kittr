'use client';

import { ChannelListItem } from './Item';

export interface ChannelListItemProps {
  imagePath: string;
  name: string;
  urlSafeName: string;
  socials: {
    twitch?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    instagram?: string;
    discord?: string;
  };
}

export interface ChannelListProps {
  channelList: ChannelListItemProps[];
  withSocialIcons?: boolean;
}

export type SocialProperties = keyof ChannelListItemProps['socials'];

export const ChannelList = ({ channelList }: ChannelListProps) => {
  return (
    <ul>
      {channelList.map((channel) => {
        return <ChannelListItem key={channel.name} {...channel} />;
      })}
    </ul>
  );
};
