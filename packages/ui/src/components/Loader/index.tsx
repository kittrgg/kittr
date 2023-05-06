import type { LoaderProps } from '@mantine/core';
import { Loader as MantineLoader } from '@mantine/core';

export const Loader = (props: LoaderProps) => {
  return <MantineLoader size="lg" radius="lg" variant="dots" {...props} />;
};
