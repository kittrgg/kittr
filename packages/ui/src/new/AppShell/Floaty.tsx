'use client';
import type { SetStateAction, Dispatch } from 'react';
import { cva } from 'class-variance-authority';
import { Menu, X } from '../../icons';

export const floatyVariants = cva(
  'fixed z-50 p-2 rounded-full right-4 bottom-4 opacity-100 pointer-events-auto cursor-pointer bg-zinc-800 transition-all sm:opacity-0 sm:pointer-events-none',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: '',
        hidden: '',
      },
    },
  },
);

export const Floaty = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="pointer-events-auto fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-zinc-800 p-2 opacity-100 transition-all sm:pointer-events-none sm:opacity-0"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </div>
  );
};
