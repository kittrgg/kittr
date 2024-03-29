import { cn, typographyVariants } from '@kittr/ui/new';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/fetches';
import { KitCard } from '@/app/(creators)/(game)/channel/[channel]/[game]/components/KitCard';
import type { AllChannelGamesKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';

// Thanks, ChatGPT.
function generateRandomIndices(inputArray: unknown[]): number[] | null {
	if (inputArray.length < 3) {
		return null;
	}

	const indices = new Set<number>();

	while (indices.size < 3) {
		const randomIndex = Math.floor(Math.random() * inputArray.length);
		indices.add(randomIndex);
	}

	return Array.from(indices);
}

export function MoreKits({
	allKits,
	activeKit,
	channel,
	game,
}: {
	channel: string;
	game: string;
	allKits: AllChannelGamesKits;
	activeKit: Kits[number];
}) {
	const kitsNotCurrentlyInView = allKits.filter(
		(kit) => kit.base.displayName !== activeKit.base.displayName,
	);
	const indices = generateRandomIndices(kitsNotCurrentlyInView);
	if (!indices) return null;

	const randomKits = indices.map((index) => kitsNotCurrentlyInView[index]);

	return (
		<section className="flex flex-col gap-4">
			<h3
				className={cn(typographyVariants({ presets: 'h3' }), 'text-zinc-300')}
			>
				More kits
			</h3>
			<div className="relative z-10 grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{randomKits
					.sort((a, b) => a.base.displayName.localeCompare(b.base.displayName))
					.sort((a, b) => Number(b.featured) - Number(a.featured))
					.map((kit, index) => {
						return (
							<KitCard
								arrIndex={index}
								channel={channel}
								game={game}
								key={kit.id}
								kit={kit}
							/>
						);
					})}
			</div>
		</section>
	);
}
