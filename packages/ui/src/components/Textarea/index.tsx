import type { TextareaProps } from '@mantine/core';
import { Textarea as MantineTextarea } from '@mantine/core';

export const Textarea = (props: TextareaProps) => {
  return <MantineTextarea size="lg" radius="lg" {...props} />;
};
