import type { Metadata } from 'next';

export interface GenerateKittrMetadataArgs {
  title: string;
  description: string;
  canonicalURL: string;
  noIndex?: boolean;
  shallowOverwrites?: Metadata;
}

export const generateKittrMetadata = ({
  title,
  description,
  shallowOverwrites,
  noIndex,
  canonicalURL,
}: GenerateKittrMetadataArgs): Metadata => {
  const ogImages = [encodeURI(`/api/og?title=${title}`)];
  const ogTitle = `${title} | kittr`;

  return {
    twitter: {
      images: ogImages,
      title: ogTitle,
      description,
    },
    title: ogTitle,
    applicationName: 'kittr',
    description,
    robots: noIndex ? 'noindex' : undefined,
    openGraph: {
      type: 'website',
      images: ogImages,
      title: ogTitle,
      description,
      url: canonicalURL,
    },
    ...shallowOverwrites,
  };
};
