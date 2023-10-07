import type { SelectProps } from '@mantine/core';
import { Select as MantineSelect } from '@mantine/core';

export const Select = (props: SelectProps) => {
	return <MantineSelect size="lg" radius="lg" {...props} />;
};
