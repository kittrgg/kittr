import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';
import React from 'react';

export interface ButtonProps extends MantineButtonProps {
	children?: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
	return <MantineButton radius="lg" size="lg" {...props} />;
};
