'use client';
import * as React from 'react';
import { useState } from 'react';
import { cva } from 'class-variance-authority';
import { typographyVariants } from '../Typography';
import { cn } from '../utils';
import { Floaty } from './Floaty';
import { useCloseOnNavigate } from './useCloseOnNavigate';

interface AppShellProps {
  children?: React.ReactNode;
  nav: React.ReactNode;
  logoImagePath: string;
  logoImageAlt: string;
  pathnameForCloseEffect: string;
}

export { AppShellLinkItem } from './LinkItem';

export const asideVariants = cva(
  'fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-zinc-800 sm:translate-x-0',
  {
    defaultVariants: {
      variant: 'closed',
    },
    variants: {
      variant: {
        closed: '-translate-x-full',
        open: 'translate-x-0',
      },
    },
  },
);
export const frostedGlassVariants = cva(
  'fixed w-full h-full backdrop-blur z-40 transition-all sm:opacity-0',
  {
    defaultVariants: {
      variant: 'hidden',
    },
    variants: {
      variant: {
        hidden: 'pointer-events-none opacity-0',
        visible: 'opacity-100',
      },
    },
  },
);

export const AppShell: React.FC<AppShellProps> = ({
  nav,
  children,
  logoImagePath,
  logoImageAlt,
  pathnameForCloseEffect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useCloseOnNavigate(setIsOpen, pathnameForCloseEffect);

  return (
    <>
      <Floaty isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={frostedGlassVariants({
          variant: isOpen ? 'visible' : 'hidden',
        })}
      />
      <aside className={asideVariants({ variant: isOpen ? 'open' : 'closed' })}>
        <div
          className={cn(
            typographyVariants({ presets: 'h5' }),
            'flex h-full w-60 flex-none flex-col gap-2 overflow-y-auto p-4',
          )}
        >
          <img
            src={logoImagePath}
            alt={logoImageAlt}
            className="max-h-[50px] max-w-[200px]"
          />
          {nav}
        </div>
      </aside>
      <main className="container h-screen flex-auto overflow-auto bg-zinc-900 p-8 sm:ml-64">
        {children}
      </main>
    </>
  );
};
