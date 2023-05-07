import type { TextInputProps } from "@mantine/core";
import { TextInput as MantineTextInput } from "@mantine/core";

export const TextInput = (props: TextInputProps) => {
  return <MantineTextInput size="lg" radius="lg" {...props} />;
};
