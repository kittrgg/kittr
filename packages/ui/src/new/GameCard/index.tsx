import * as React from 'react';
import { Badge } from '../Badge';
import { H4, H3, H5, Span } from '../Typography';
import { cn } from '../utils';

interface GameCardProps {
  title: string;
  developer: string;
  imageProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  subtitle?: string;
  /** Use this to indicate if the game is active, also disables the button */
  disabled?: boolean;
  genres: string[];
  platforms: string[];
}

export const GameCard: React.FC<GameCardProps> = ({
  title,
  imageProps,
  developer,
  genres,
  platforms,
  disabled,
}) => {
  return (
    <button
      className={cn(
        'relative m-4 rounded-xl bg-zinc-900 p-8 text-center shadow-md outline-none',
        {
          'bg-zinc-900/60': disabled,
          'hover:cursor-pointer hover:bg-zinc-800 focus:shadow-slate-600 active:bg-zinc-700':
            !disabled,
        },
      )}
      disabled={disabled}
    >
      {disabled && (
        <H4 className={cn('absolute bottom-8 right-8 tracking-wide')}>
          COMING SOON
        </H4>
      )}
      <div className={cn('flex', { 'opacity-40': disabled })}>
        <img
          {...imageProps}
          className={cn('flex rounded-md', imageProps?.className)}
        />

        <div className={cn('mx-8 my-4 flex min-w-[14rem] flex-col text-left')}>
          <H3>{title}</H3>
          <H5 className={cn('text-gray-400')}>{developer}</H5>

          <Span className="mt-4 block">Genres</Span>
          <div>
            {genres.map((genre) => (
              <Badge>{genre}</Badge>
            ))}
          </div>
          <Span className="mt-2 block">Platforms</Span>
          <div>
            {platforms.map((platform) => (
              <Badge variant="outline">{platform}</Badge>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};
