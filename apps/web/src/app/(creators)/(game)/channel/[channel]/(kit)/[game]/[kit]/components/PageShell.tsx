'use client';

import { useState } from 'react';
import { Button } from '@kittr/ui/new';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/fetches';
import { PageBody } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/PageBody';
import type { AllChannelGamesKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';

export function PageShell({
	kits,
	allChannelGameKits,
	youTubeAutoplay,
	channel,
	game,
}: {
	youTubeAutoplay: boolean;
	channel: string;
	game: string;
	kits: Kits;
	allChannelGameKits: AllChannelGamesKits;
}) {
	const [kitIndex, setKitIndex] = useState(0);

	return (
		<>
			<div className="z-10 flex flex-row gap-4">
				{kits.length > 1
					? kits.map((kit, index) => {
							const text = kit.customTitle ? kit.customTitle : 'Default';

							return (
								<Button
									className={
										kitIndex === index
											? 'bg-white text-black hover:bg-zinc-200'
											: 'text-zinc-100 hover:bg-zinc-700'
									}
									key={kit.id}
									onClick={() => {
										setKitIndex(index);
									}}
								>
									{text}
								</Button>
							);
					  })
					: null}
			</div>
			<PageBody
				allKits={allChannelGameKits}
				channel={channel}
				game={game}
				kit={kits[kitIndex]}
				youTubeAutoplay={youTubeAutoplay}
			/>
		</>
	);
}
