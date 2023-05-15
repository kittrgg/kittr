'use client';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from '../../icons';

export const AppShellLinkItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="group relative mr-auto flex flex-row items-center text-white transition-all hover:text-zinc-300">
      <Slot className="flex flex-row gap-2 py-2 pr-8">{children}</Slot>
      <ChevronRight className="pointer-events-none absolute right-2 inline-block text-zinc-300 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100" />
    </div>
  );
};
