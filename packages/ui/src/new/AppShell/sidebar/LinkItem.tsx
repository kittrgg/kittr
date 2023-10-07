'use client';

import { Slot } from '@radix-ui/react-slot';
import { useRef } from 'react';
import { ChevronRight } from '../../../icons';
import { useOnScreen } from '../../../hooks';
import { cn } from '../../utils';

export const AppShellLinkItem = ({
	children,
	className,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const ref = useRef(null);
	const isIntersecting = useOnScreen({ ref });
	return (
		<div
			className={cn(
				'group relative mr-auto flex flex-row items-center text-white transition-all hover:text-zinc-300',
				className,
			)}
		>
			<Slot
				ref={ref}
				tabIndex={isIntersecting ? 1 : -1}
				className="flex flex-row gap-2 py-2 pr-8 [&>svg]:relative [&>svg]:top-0.5"
			>
				{children}
			</Slot>
			<ChevronRight className="absolute inline-block transition-all opacity-0 pointer-events-none right-2 text-zinc-300 group-hover:right-0 group-hover:opacity-100" />
		</div>
	);
};
