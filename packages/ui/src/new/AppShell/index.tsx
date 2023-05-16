'use client';
import * as React from 'react';
import { useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import FocusTrap from 'focus-trap-react';
import { typographyVariants } from '../Typography';
import { cn } from '../utils';
import { Floaty } from './Floaty';
import { useCloseOnNavigate } from './useCloseOnNavigate';

interface AppShellProps {
  children?: React.ReactNode;
  nav: React.ReactNode;
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
  pathnameForCloseEffect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useCloseOnNavigate(setIsOpen, pathnameForCloseEffect);

  return (
    <>
      <div
        className={frostedGlassVariants({
          variant: isOpen ? 'visible' : 'hidden',
        })}
        onClick={() => setIsOpen(false)}
      />
      <FocusTrap>
        <div>
          <nav
            ref={navRef}
            className={asideVariants({ variant: isOpen ? 'open' : 'closed' })}
          >
            <div
              className={cn(
                typographyVariants({ presets: 'h5' }),
                'flex h-full w-60 flex-none flex-col gap-2 overflow-y-auto p-4',
              )}
            >
              {nav}
            </div>
          </nav>
          <Floaty isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </FocusTrap>
      <main className="container flex-auto bg-zinc-900 p-8 sm:ml-64">
        {children}
      </main>
    </>
  );
};
