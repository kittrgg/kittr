import { Select as MantineSelect, SelectProps } from '@mantine/core';

export const Select = (props: SelectProps) => {
  return <MantineSelect size="lg" radius="lg" {...props} />;
};
