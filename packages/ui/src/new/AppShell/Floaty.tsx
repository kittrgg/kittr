'use client';
import type { SetStateAction, Dispatch } from 'react';
import { Menu, X } from '../../icons';

export const Floaty = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      className="pointer-events-auto fixed bottom-4 right-4 z-50 cursor-pointer rounded-full bg-zinc-800 p-2 opacity-100 transition-all sm:pointer-events-none sm:opacity-0"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};
