import type { MantineProviderProps } from '@mantine/core';
import { MantineProvider as MantineLibProvider } from '@mantine/core';
import React from 'react';
import { theme } from './styles/theme';

export interface MantineProviderMantineProviderProps
	extends MantineProviderProps {
	children: React.ReactNode;
}

export const MantineProvider = ({
	children,
	...props
}: MantineProviderMantineProviderProps) => {
	return (
		<MantineLibProvider withNormalizeCSS theme={theme} {...props}>
			{children}
		</MantineLibProvider>
	);
};
