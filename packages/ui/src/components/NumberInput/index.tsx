import {
  NumberInput as MantineNumberInput,
  NumberInputProps,
} from '@mantine/core';

export const NumberInput = (props: NumberInputProps) => {
  return <MantineNumberInput size="lg" radius="lg" {...props} />;
};
