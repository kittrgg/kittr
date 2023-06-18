'use client';

import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import FocusTrap from 'focus-trap-react';
import { typographyVariants } from '../Typography';
import { cn } from '../utils';
import { useBodyScrollLock } from '../../hooks';
import { Twitter, Discord } from '../../icons';
import type { NextLinkType } from '../../../utils';
import { Floaty } from './Floaty';
import { useCloseOnNavigate } from './useCloseOnNavigate';

interface AppShellProps {
  children?: ReactNode;
  nav: ReactNode;
  linkComponent: NextLinkType;
  links: { children: ReactNode; href: string }[];
  footerImage: ReactNode;
  pathnameForCloseHook: string;
}

export { AppShellLinkItem } from './sidebar/LinkItem';

export const asideVariants = cva(
  'fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-zinc-800 sm:translate-x-0 xl:left-[initial]',
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
  footerImage,
  linkComponent,
  links,
  children,
  pathnameForCloseHook,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useCloseOnNavigate(setIsOpen, pathnameForCloseHook);
  useBodyScrollLock(isOpen);
  const LinkComponent = linkComponent;

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
            <div
              className={cn(
                typographyVariants({ presets: 'h5' }),
                asideVariants({ variant: isOpen ? 'open' : 'closed' }),
                'flex h-full w-60 flex-none flex-col gap-2 bg-gradient-to-b from-zinc-400 to-zinc-800 overflow-y-auto pr-0.5',
              )}
            >
              <nav
                ref={navRef}
                className="flex flex-col flex-none w-full h-full gap-2 p-4 overflow-y-auto bg-zinc-800"
              >
                {nav}
              </nav>
            </div>
            <Floaty isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </FocusTrap>
      <div className="container flex-auto bg-zinc-900 sm:ml-60">
        <main className="flex flex-col min-h-screen gap-8 p-8 bg-zinc-900">
          {children}
        </main>
        <footer className="flex flex-col gap-8 p-8 bg-neutral-900">
          <div className="m-auto">{footerImage}</div>
          {/* Sorry about the !important for the breakopint but Tailwind isn't playing nice. */}
          <div className="m-auto grid max-w-lg grid-cols-3 gap-10 md:!grid-cols-6 md:gap-6">
            {links.slice(0, -2).map((link, ind) => {
              return (
                <LinkComponent
                  key={ind}
                  {...link}
                  className="self-center font-bold text-white justify-self-center hover:underline"
                />
              );
            })}
          </div>
          <div className="flex flex-row items-center justify-center gap-10 md:gap-10">
            {links.slice(-2).map((link, ind) => {
              return (
                <LinkComponent
                  key={ind}
                  {...link}
                  className="font-bold text-white hover:underline"
                />
              );
            })}
          </div>
          <div className="flex flex-row items-center justify-center gap-8">
            <a
              href="https://twitter.com/kittrgg"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter a11yTitle="kittr's Twitter" />
            </a>
            <a
              href="https://discord.gg/KWaPCU2d3S"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Discord a11yTitle="kittr's Discord" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
