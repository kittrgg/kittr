import { H1 } from '@kittr/ui/new';
import { notFound } from 'next/navigation';
import { components, componentEntries } from '#/componentMap';

export function generateStaticParams() {
	return componentEntries.map(([slug]) => {
		return {
			component: slug,
		};
	});
}

function Page({
	params,
}: {
	params: { component: keyof typeof components | undefined };
}) {
	if (!params.component) return notFound();

	return (
		<>
			<H1 className="pb-4 border-b">{components[params.component].name}</H1>
			<div
				className={
					params.component === 'icons'
						? 'mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4'
						: 'mt-8 flex flex-col gap-6'
				}
			>
				{components[params.component].components.map((icon) => {
					return (
						<div
							className="flex flex-col justify-center gap-2 align-center"
							key={icon.key}
						>
							{icon}
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Page;
