import { Typography } from "../Typography";
import { cn } from "../utils";

interface PlayerCardProps {
  name: string;
  imageProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  isLive?: boolean;
}

export const PlayerCard = ({ name, isLive, imageProps }: PlayerCardProps) => {
  return (
    <button
      className={cn(
        "relative m-4 rounded-xl bg-zinc-900 p-4 px-8 text-center shadow-md outline-none hover:cursor-pointer hover:bg-zinc-800 focus:shadow-slate-600 active:bg-zinc-700"
      )}
    >
      <img
        {...imageProps}
        className={cn("m-4 flex rounded-full", imageProps.className)}
      />

      {isLive && (
        <div
          className={cn(
            "absolute bottom-16 left-1/2 -translate-x-1/2 rounded-md bg-red-600"
          )}
        >
          <Typography.Span className={cn("px-2 py-0.5 tracking-widest")}>
            LIVE
          </Typography.Span>
        </div>
      )}

      <Typography.P
        className={cn(
          "w-40 overflow-hidden truncate whitespace-nowrap text-xl font-bold tracking-widest"
        )}
      >
        {name}
      </Typography.P>
    </button>
  );
};
