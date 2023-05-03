import { Loader as MantineLoader, LoaderProps } from '@mantine/core';

export const Loader = (props: LoaderProps) => {
  return <MantineLoader size="lg" radius="lg" variant="dots" {...props} />;
};
