import {
  Discord,
  Tiktok,
  Instagram,
  Facebook,
  Twitch,
  Twitter,
  Youtube,
} from './brands';

export const ChannelSocials = ({
  property,
  a11yTitle,
}: {
  property:
    | 'discord'
    | 'facebook'
    | 'instagram'
    | 'tiktok'
    | 'twitch'
    | 'twitter'
    | 'youtube';
  a11yTitle?: string;
}) => {
  if (property === 'discord') return <Discord a11yTitle={a11yTitle} />;
  if (property === 'instagram') return <Instagram a11yTitle={a11yTitle} />;
  if (property === 'tiktok') return <Tiktok a11yTitle={a11yTitle} />;
  if (property === 'facebook') return <Facebook a11yTitle={a11yTitle} />;
  if (property === 'twitch') return <Twitch a11yTitle={a11yTitle} />;
  if (property === 'twitter') return <Twitter a11yTitle={a11yTitle} />;
  return <Youtube />;
};
