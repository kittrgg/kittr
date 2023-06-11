import * as React from 'react';
import { Badge } from '../Badge';
import { H4, H3, H5, Span } from '../Typography';
import { cn } from '../utils';
import type { NextLinkType } from '../../../utils';

interface GameCardProps {
  title: string;
  developer: string;
  as: 'button' | 'Link';
  linkComponent?: NextLinkType;
  href?: string;
  imageProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  /** Use this to indicate if the game is active, also disables the button */
  disabled?: boolean;
  genres: string[];
  platforms: string[];
}

export const GameCard: React.FC<GameCardProps> = ({
  title,
  imageProps,
  developer,
  as = 'button',
  linkComponent,
  href,
  genres,
  platforms,
  disabled,
}) => {
  if (as === 'Link' && !linkComponent) {
    throw new Error('You need to provide a linkComponent to this GameCard.');
  }

  if (linkComponent && !href) {
    throw new Error('You need to provide an href to this GameCard.');
  }

  const Component = as === 'Link' ? linkComponent! : 'button';

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
          imageProps?.className,
        )}
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
    </Component>
  );
};
