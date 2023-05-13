import { Span, P } from '../Typography';
import { cn } from '../utils';
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar';

interface PlayerCardProps {
  name: string;
  imageSrc: string;
  isLive?: boolean;
  className?: string;
}

export const PlayerCard = ({
  name,
  isLive,
  imageSrc,
  className,
}: PlayerCardProps) => {
  return (
    <button
      className={cn(
        'relative m-4 w-[200px] rounded-xl bg-zinc-900 p-4 px-8 text-center shadow-md outline-none hover:cursor-pointer hover:bg-zinc-800 focus:shadow-slate-600 active:bg-zinc-700',
        className,
      )}
    >
      <Avatar className="m-auto h-[100px] w-[100px]">
        <AvatarFallback>...</AvatarFallback>
        <AvatarImage alt={name} src={imageSrc} />
      </Avatar>

      {isLive && (
        <div
          className={cn(
            'absolute bottom-16 left-1/2 -translate-x-1/2 rounded-md bg-red-600',
          )}
        >
          <Span className={cn('px-2 py-0.5 tracking-widest')}>LIVE</Span>
        </div>
      )}

      <P
        className={cn(
          'w-40 overflow-hidden truncate whitespace-nowrap text-xl font-bold tracking-widest',
        )}
      >
        {name}
      </P>
    </button>
  );
};
