import { Text as MantineTitle, TitleProps } from '@mantine/core';

const fontFamily = 'Barlow Condensed, serif';

export const TITLE_PRESETS = {
  d1: {
    fontSize: '4.5rem',
    fontWeight: 900,
    fontFamily,
    letterSpacing: '.375rem',
  },
  d2: {
    fontSize: '3.5rem',
    fontWeight: 600,
    fontFamily,
    letterSpacing: '.3rem',
  },
  h1: {
    fontFamily,
    fontSize: '2.25rem',
    fontWeight: 900,
    letterSpacing: '.1875rem',
  },
  h2: {
    fontFamily,
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '.166666666667rem',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 700,
    fontFamily,
    letterSpacing: '.145rem',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    fontFamily,
    letterSpacing: '.125rem',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    fontFamily,
    letterSpacing: '.105rem',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily,
    letterSpacing: '.08333333rem',
  },
};

interface Props extends TitleProps {
  /** Use a preset defined styling property. */
  preset?: keyof typeof TITLE_PRESETS;
}

export const Title = ({ preset, children, sx, ...props }: Props) => {
  const styles = preset ? TITLE_PRESETS[preset] : {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size, ...rest } = props;

  return (
    <MantineTitle sx={{ ...styles, ...sx }} {...rest}>
      {children}
    </MantineTitle>
  );
};
