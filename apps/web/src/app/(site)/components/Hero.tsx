import { prisma } from '@kittr/prisma';
import { Cobe } from './Cobe';

export async function Hero() {
	const wzKitCount = await prisma.warzoneKit.count();
	const wzTwoKitCount = await prisma.warzoneTwoKit.count();
	const totalNumberOfKits = wzKitCount + wzTwoKitCount;

	return (
		<div className="relative flex flex-row justify-center gap-6 min-h-[600px] -m-8">
			<div className="flex flex-col justify-center gap-8 m-8">
				<h1 className="relative z-20 text-6xl font-bold text-center">
					get kittd.
				</h1>
				<p className="relative z-20 text-xl font-bold text-center text-gray-400">
					{Math.floor(totalNumberOfKits / 1000) * 1000}+ kits
				</p>
				<p className="relative z-20 mx-auto text-lg font-semibold text-center text-wrap-balance">
					Where streamers share kits - and you use them.
				</p>
			</div>
			<Cobe />
		</div>
	);
}
