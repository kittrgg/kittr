import { Span, P } from '../Typography';
import { cn } from '../utils';
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar/Primitive';

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
        'relative m-4 w-[200px] rounded-xl bg-zinc-800 p-4 px-8 text-center shadow-md outline-none hover:cursor-pointer hover:bg-zinc-800 focus:shadow-slate-600 active:bg-zinc-700',
        className,
      )}
    >
      <div className="relative">
        <Avatar className="m-auto h-[100px] w-[100px]">
          <AvatarFallback>...</AvatarFallback>
          <AvatarImage alt={name} src={imageSrc} />
        </Avatar>
        {isLive && (
          <div
            className={cn(
              'absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-md bg-red-600',
            )}
          >
            <Span className={cn('px-2 py-0.5 text-sm tracking-widest')}>
              LIVE
            </Span>
          </div>
        )}
      </div>

      <P
        className={cn(
          'overflow-hidden truncate whitespace-nowrap pt-4 text-xl font-bold tracking-widest',
        )}
      >
        {name}
      </P>
    </button>
  );
};
