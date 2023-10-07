import { Badge } from '../Badge';
import { H4, H3, H5, Span } from '../Typography';
import { cn } from '../utils';
import type { NextLinkType } from '../../utils';

interface GameCardProps {
	title: string;
	developer?: string;
	linkComponent?: NextLinkType;
	href?: string;
	imageProps: React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;
	/** Use this to indicate if the game is active, also disables the button */
	disabled?: boolean;
	genres?: string[];
	platforms?: string[];
	/** Any other content to render in card. Will be rendered AFTER content from props. */
	extraChildren?: React.ReactNode;
}

export const GameCard: React.FC<GameCardProps> = ({
	title,
	imageProps,
	developer,
	linkComponent,
	href,
	genres,
	platforms,
	disabled,
	extraChildren,
}) => {
	if (linkComponent && !href) {
		throw new Error('You need to provide an href to this GameCard.');
	}

	const Component = linkComponent ? linkComponent : 'button';

	return (
		<Component
			href={href}
			className={cn(
				'relative m-4 rounded-xl bg-zinc-800 text-center shadow-md outline-none',
				{
					'bg-zinc-900/60': disabled,
					'hover:cursor-pointer hover:bg-zinc-700 focus:shadow-slate-600 active:bg-zinc-700':
						!disabled,
				},
			)}
			disabled={disabled}
		>
			{disabled && (
				<div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
					<H4
						className={cn(
							'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform text-2xl font-bold text-neutral-400',
						)}
					>
						COMING SOON
					</H4>
				</div>
			)}
			<img
				{...imageProps}
				className={cn(
					'flex h-40 w-full rounded-t-xl object-cover',
					imageProps.className,
				)}
			/>

			<div className={cn('mx-8 my-4 flex min-w-[14rem] flex-col text-left')}>
				<H3>{title}</H3>
				{developer ? (
					<H5 className={cn('text-gray-400')}>{developer}</H5>
				) : null}
				{genres ? (
					<>
						<Span className="block mt-4">Genres</Span>
						<div>
							{genres.map((genre) => (
								<Badge key={genre}>{genre}</Badge>
							))}
						</div>
					</>
				) : null}
				{platforms ? (
					<>
						<Span className="block mt-2">Platforms</Span>
						<div>
							{platforms.map((platform) => (
								<Badge variant="outline" key={platform}>
									{platform}
								</Badge>
							))}
						</div>
					</>
				) : null}
				{extraChildren}
			</div>
		</Component>
	);
};
