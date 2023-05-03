import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core';

export const TextInput = (props: TextInputProps) => {
  return <MantineTextInput size="lg" radius="lg" {...props} />;
};
