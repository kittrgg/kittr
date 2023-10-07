'use client';

import { Button } from '@kittr/ui/new';
import type { ChannelLink, LinkProperty } from '@kittr/prisma';
import { ChannelSocials } from '@kittr/ui/social-icons';
import { capitalizeFirst } from '@kittr/utils';

export function SocialLinkButton({ link }: { link: ChannelLink }) {
	return (
		<Button
			asChild
			className="w-full md:w-1/3 bg-zinc-900 hover:bg-zinc-800"
			key={link.property}
			variant="outline"
		>
			<a
				className="flex flex-row items-center justify-center gap-4"
				href={link.value}
				rel="noopener noreferrer"
				target="_blank"
			>
				{ChannelSocials({
					property: link.property.toLowerCase() as Lowercase<LinkProperty>,
				})}
				<p>{capitalizeFirst(link.property)}</p>
			</a>
		</Button>
	);
}
