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
			onClick={() => {
				setIsOpen(!isOpen);
			}}
			tabIndex={0}
			className="fixed z-50 p-3 transition-all border-2 rounded-full shadow-md opacity-100 cursor-pointer pointer-events-auto shadow-zinc-400 border-zinc-400 bottom-4 right-4 bg-zinc-800 sm:pointer-events-none sm:opacity-0"
		>
			{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
		</button>
	);
};
