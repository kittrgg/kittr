import * as React from 'react';
import { P, typographyVariants } from '../Typography';

interface AppShellProps {
  children?: React.ReactNode;
  nav: React.ReactNode;
}

export { AppShellLinkItem } from './LinkItem';

export const AppShell: React.FC<AppShellProps> = ({ nav, children }) => {
  return (
    <>
      <aside className="dark left-0 top-0 z-40 h-screen -translate-x-full transition-transform sm:translate-x-0">
        <div className="flex h-full w-60 flex-none flex-col gap-4 overflow-y-auto bg-gray-50 p-4 dark:bg-zinc-800">
          {nav}
        </div>
      </aside>
      <main className="container h-screen flex-auto overflow-scroll p-8">
        {children}
      </main>
    </>
  );
};

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <P className={typographyVariants({ presets: 'h4' })}>{children}</P>;
}

export function SidebarSeparator() {
  return <hr className="w-full min-w-full border-zinc-600" />;
}
