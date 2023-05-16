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
    <div
      id="floaty-burger"
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      onKeyDown={(key) => {
        if (key.code === 'Enter') {
          setIsOpen(!isOpen);
        }
      }}
      className="pointer-events-auto fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-zinc-800 p-2 opacity-100 transition-all sm:pointer-events-none sm:opacity-0"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </div>
  );
};
