import { Title } from '../Title';
import { Box } from '@mantine/core';
import React from 'react';

export interface SectionProps {
  title?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  hoverable?: boolean;
  transparent?: boolean;
}

export const Section = ({
  title,
  action,
  hoverable,
  children,
  transparent,
}: SectionProps) => {
  return (
    <Box
      sx={(theme) => ({
        padding: '2rem',
        borderRadius: theme.radius.lg,
        backgroundColor: transparent
          ? 'none'
          : theme.colorScheme === 'dark'
          ? theme.colors.brand[9]
          : theme.colors.brand[2],
        height: '100%',
        position: 'relative',
      })}
    >
      {action && <Box sx={{ float: 'right' }}>{action}</Box>}
      {title && (
        <Title
          preset="h3"
          sx={{
            marginBottom: '1rem',
          }}
        >
          {title}
        </Title>
      )}

      <Box>{children}</Box>
    </Box>
  );
};
