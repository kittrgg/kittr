'use client';

import { Slot } from '@radix-ui/react-slot';
import { capitalizeFirst } from '@kittr/utils';
import { AvatarFallback, Avatar, AvatarImage } from '../Avatar';
import { ChannelSocials } from '../../icons/brands';

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

// LEGACY: Make sure that the link is converted to a hyperlink if it is incomplete from the database.
const formatLink = (link: string) => {
  if (!link.startsWith('https://')) return `https://${link}`;
  return link;
};

const socialIconsOrder = [
  'twitch',
  'youtube',
  'twitter',
  'tiktok',
  'instagram',
  'discord',
];

const socialSort = ({
  socials,
}: {
  socials: ChannelListItemProps['socials'];
}): {
  property: keyof ChannelListItemProps['socials'];
  url: string;
}[] => {
  const arrToBuild: ReturnType<typeof socialSort> = [];
  const entries = Object.entries(socials);
  socialIconsOrder.forEach((social) => {
    const found = entries.find((entry) => entry[0] === social);
    if (found) {
      arrToBuild.push({
        property: found[0] as keyof ChannelListItemProps['socials'],
        url: formatLink(found[1]),
      });
    }
  });

  return arrToBuild;
};

export const ChannelListItem = ({
  imagePath,
  name,
  socials,
}: ChannelListItemProps) => {
  return (
    <Slot className="flex flex-row gap-4 p-4">
      <li>
        <Avatar>
          <AvatarFallback>...</AvatarFallback>
          <AvatarImage src={imagePath} alt={name} />
        </Avatar>
        <p>{name}</p>
        {Object.keys(socials).length > 0 ? (
          <span>
            {socialSort({ socials }).map((social) => {
              return (
                <a
                  key={social.url}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ChannelSocials
                    a11yTitle={capitalizeFirst(social.property)}
                    property={social.property}
                  />
                </a>
              );
            })}
          </span>
        ) : null}
      </li>
    </Slot>
  );
};
