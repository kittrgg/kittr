import * as React from 'react';
import { P, typographyVariants } from '../Typography';
import { cn } from '../utils';

interface AppShellProps {
  children?: React.ReactNode;
  nav: React.ReactNode;
  logoImagePath: string;
  logoImageAlt: string;
}

export { AppShellLinkItem } from './LinkItem';

export const AppShell: React.FC<AppShellProps> = ({
  nav,
  children,
  logoImagePath,
  logoImageAlt,
}) => {
  return (
    <>
      <aside className="dark top-0 left-0 z-40 h-screen -translate-x-full transition-transform sm:translate-x-0">
        <div className="flex h-full w-60 flex-none flex-col gap-2 overflow-y-auto bg-gray-50 p-4 dark:bg-zinc-800">
          <img
            src={logoImagePath}
            alt={logoImageAlt}
            className="max-h-[50px] max-w-[200px]"
          />
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
  return (
    <P className={cn(typographyVariants({ presets: 'h4' }), 'py-2')}>
      {children}
    </P>
  );
}

export function SidebarSeparator() {
  return <hr className="my-2 w-full min-w-full border-zinc-600" />;
}
