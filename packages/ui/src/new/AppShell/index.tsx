'use client';

import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import FocusTrap from 'focus-trap-react';
import { typographyVariants } from '../Typography';
import { cn } from '../utils';
import { useBodyScrollLock } from '../../hooks';
import { Floaty } from './Floaty';
import { useCloseOnNavigate } from './useCloseOnNavigate';

interface AppShellProps {
  children?: ReactNode;
  nav: ReactNode;
  pathnameForCloseHook: string;
}

export { AppShellLinkItem } from './sidebar/LinkItem';

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
  pathnameForCloseHook,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useCloseOnNavigate(setIsOpen, pathnameForCloseHook);
  useBodyScrollLock(isOpen);

  return (
    <>
      <FocusTrap
        active={isOpen}
        paused={!isOpen}
        focusTrapOptions={{ preventScroll: true }}
      >
        <div>
          <div
            className={frostedGlassVariants({
              variant: isOpen ? 'visible' : 'hidden',
            })}
            onClick={() => setIsOpen(false)}
          />
          <div>
            <nav
              ref={navRef}
              className={cn(
                typographyVariants({ presets: 'h5' }),
                asideVariants({ variant: isOpen ? 'open' : 'closed' }),
                'flex h-full w-60 flex-none flex-col gap-2 overflow-y-auto p-4',
              )}
            >
              {nav}
            </nav>
            <Floaty isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </FocusTrap>
      <div className="container flex-auto bg-zinc-900 sm:ml-60">
        <main className="min-h-screen bg-zinc-900 p-8">{children}</main>
        <footer className="bg-green-500 p-8">yayya</footer>
      </div>
    </>
  );
};
