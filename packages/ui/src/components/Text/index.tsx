import type { TextProps } from '@mantine/core';
import { Text as MantineText, useMantineTheme } from '@mantine/core';
import type { ReactNode } from 'react';

const fontFamily = 'Montserrat, sans-serif';

export const TEXT_PRESETS = {
  xxs: {
    fontSize: '.625rem',
    fontFamily,
    letterSpacing: '0.05rem',
    lineHeight: '2rem',
  },
  'xxs semibold': {
    fontSize: '.625rem',
    fontFamily,
    fontWeight: 600,
    letterSpacing: '0.05rem',
    lineHeight: '2rem',
  },
  xs: {
    fontSize: '.75rem',
    fontFamily,
    letterSpacing: '0.05rem',
    lineHeight: '2rem',
  },
  'xs italic': {
    fontSize: '.75rem',
    fontFamily,
    letterSpacing: '0.05rem',
    fontStyle: 'italic',
    lineHeight: '2rem',
  },
  'xs semibold': {
    fontSize: '.75rem',
    fontFamily,
    fontWeight: 600,
    lineHeight: '2rem',
    letterSpacing: '0.05rem',
  },
  'xs bold': {
    fontSize: '.75rem',
    fontFamily,
    fontWeight: 700,
    lineHeight: '2rem',
    letterSpacing: '0.05rem',
  },
  sm: {
    fontSize: '.875rem',
    fontFamily,
    lineHeight: '2rem',
  },
  'sm italic': {
    fontSize: '.875rem',
    fontFamily,
    lineHeight: '2rem',
    fontStyle: 'italic',
  },
  'sm semibold': {
    fontSize: '.875rem',
    fontFamily,
    lineHeight: '2rem',
    fontWeight: 600,
  },
  'sm bold': {
    fontSize: '.875rem',
    fontFamily,
    lineHeight: '2rem',
    fontWeight: 700,
  },
  md: {
    fontSize: '1rem',
    lineHeight: '2rem',
    fontFamily,
  },
  'md italic': {
    fontSize: '1rem',
    fontFamily,
    lineHeight: '2rem',
    fontStyle: 'italic',
  },
  'md semibold': {
    fontSize: '1rem',
    fontFamily,
    lineHeight: '2rem',
    fontWeight: 600,
  },
  'md bold': {
    fontSize: '1rem',
    fontFamily,
    lineHeight: '2rem',
    fontWeight: 700,
  },
  lg: {
    fontSize: '1.125rem',
    lineHeight: '2rem',
    fontFamily,
  },
  'lg italic': {
    fontSize: '1.125rem',
    fontFamily,
    lineHeight: '2rem',
    fontStyle: 'italic',
  },
  'lg semibold': {
    fontSize: '1.125rem',
    fontFamily,
    lineHeight: '2rem',
    fontWeight: 600,
  },
  'lg bold': {
    fontSize: '1.125rem',
    fontFamily,
    lineHeight: '2rem',
    fontWeight: 700,
  },
  xl: {
    fontSize: '1.25rem',
    lineHeight: '2rem',
    fontFamily,
  },
  'xl italic': {
    fontSize: '1.25rem',
    lineHeight: '2rem',
    fontFamily,
    fontStyle: 'italic',
  },
  'xl semibold': {
    fontSize: '1.25rem',
    lineHeight: '2rem',
    fontFamily,
    fontWeight: 600,
  },
  'xl bold': {
    fontSize: '1.25rem',
    lineHeight: '2rem',
    fontFamily,
    fontWeight: 700,
  },
};

interface Props extends TextProps {
  /** Use a preset of defined properties. */
  preset?: keyof typeof TEXT_PRESETS;
  children: ReactNode;
}

export const Text = ({ preset, children, ...props }: Props) => {
  const styles = preset ? TEXT_PRESETS[preset] : {};

  return (
    // <MantineText
    // 	Sx={{ color: props.color || colors.navy[9], ...styles, ...props.sx }}
    // 	{...props}
    // >
    <MantineText sx={{ ...styles, ...props.sx }} {...props}>
      {children}
    </MantineText>
  );
};
