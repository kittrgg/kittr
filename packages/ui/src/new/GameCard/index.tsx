import * as React from "react";
import { Badge } from "../Badge";
import { Typography } from "../Typography";
import { cn } from "../utils";

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
        "relative m-4 rounded-xl bg-zinc-900 p-8 text-center shadow-md outline-none",
        {
          "hover:cursor-pointer hover:bg-zinc-800 focus:shadow-slate-600 active:bg-zinc-700":
            !disabled,
          "bg-zinc-900/60": disabled,
        }
      )}
      disabled={disabled}
    >
      {disabled && (
        <Typography.H4
          className={cn("absolute bottom-8 right-8 tracking-wide")}
        >
          COMING SOON
        </Typography.H4>
      )}
      <div className={cn("flex", { "opacity-40": disabled })}>
        <img
          {...imageProps}
          className={cn("flex rounded-md", imageProps?.className)}
        />

        <div className={cn("mx-8 my-4 flex min-w-[14rem] flex-col text-left")}>
          <Typography.H3>{title}</Typography.H3>
          <Typography.H5 className={cn("text-gray-400")}>
            {developer}
          </Typography.H5>

          <Typography.Span className="mt-4 block">Genres</Typography.Span>
          <div>
            {genres.map((genre) => (
              <Badge>{genre}</Badge>
            ))}
          </div>
          <Typography.Span className="mt-2 block">Platforms</Typography.Span>
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
