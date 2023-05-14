'use client';
import { Slot } from '@radix-ui/react-slot';

export const AppShellLinkItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const Comp = Slot;
  return (
    <Comp className="text-white transition hover:text-zinc-300">
      {children}
    </Comp>
  );
};
