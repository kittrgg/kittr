'use client';

import type { NextLinkType } from '../../utils';
import type { CreatorListItemProps } from './Item';
import { CreatorListItem } from './Item';

export interface CreatorListProps {
	// Typed copied from next/link internals
	linkComponent: NextLinkType;
	linkBasePath: string;
	creators: Omit<CreatorListItemProps, 'linkBasePath' | 'linkComponent'>[];
	disableResponsive?: boolean;
}

export const CreatorList = ({
	creators,
	linkBasePath,
	linkComponent,
	disableResponsive,
}: CreatorListProps) => {
	return (
		<div
			className={`grid grid-cols-1 gap-4 ${
				disableResponsive ? '' : 'lg:grid-cols-3 xl:grid-cols-4'
			}`}
		>
			{creators.map((creator) => {
				return (
					<CreatorListItem
						linkComponent={linkComponent}
						linkBasePath={linkBasePath}
						key={creator.name}
						hasAvatar={creator.hasAvatar}
						id={creator.id}
						name={creator.name}
						urlSafeName={creator.urlSafeName}
						isLive={creator.isLive}
					/>
				);
			})}
		</div>
	);
};
