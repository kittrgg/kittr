'use client';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from '../../icons';

export const AppShellLinkItem = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="group mr-auto flex flex-row items-center text-white transition-all hover:text-zinc-300">
      <Slot className="mr-4">{icon}</Slot>
      <Slot className="py-2">{children}</Slot>
      <ChevronRight className="relative left-0 my-2 inline-block text-zinc-300 opacity-0 transition-all group-hover:left-2 group-hover:opacity-100" />
    </div>
  );
};
