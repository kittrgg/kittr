import type { NumberInputProps } from "@mantine/core";
import { NumberInput as MantineNumberInput } from "@mantine/core";

export const NumberInput = (props: NumberInputProps) => {
  return <MantineNumberInput size="lg" radius="lg" {...props} />;
};
