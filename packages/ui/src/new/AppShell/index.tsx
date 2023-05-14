import * as React from 'react';
import { cn } from '../utils';

interface AppShellProps {
  children?: React.ReactNode;
  nav: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ nav, children }) => {
  return (
    <>
      <aside
        id="default-sidebar"
        className={cn(
          'min-w-64 dark left-0 top-0 z-40 h-screen -translate-x-full transition-transform sm:min-w-full sm:translate-x-0',
        )}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-zinc-800">
          {nav}
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};
