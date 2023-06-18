import type { Metadata } from 'next';

interface GenerateMetadata {
  title: string;
  description: string;
  shallowOverwrites?: Metadata;
}

export const generateKittrMetadata = ({
  title,
  description,
  shallowOverwrites,
}: GenerateMetadata): Metadata => {
  const ogImages = [encodeURI(`/api/og?title=${title}`)];
  const ogTitle = `${title} | kittr`;

  return {
    twitter: {
      images: ogImages,
      title: ogTitle,
    },
    title: ogTitle,
    applicationName: 'kittr',
    description,
    openGraph: {
      type: 'website',
      images: ogImages,
    },
    ...shallowOverwrites,
  };
};
