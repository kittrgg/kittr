import { download } from '@kittr/firebase/storage';

export async function BackgroundImage({
  kitBaseDisplayName,
  kitBaseImageUrl,
}: {
  kitBaseDisplayName: string;
  kitBaseImageUrl: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={kitBaseDisplayName}
      className="absolute transform w-[150%] max-w-none md:w-full -translate-x-1/2 -translate-y-1/2 opacity-[15%] rotate-90 md:rotate-12 grayscale top-[36rem] md:top-96 left-1/2 group-hover:rotate-6 ease-in-out duration-700 group-hover:scale-110 group-hover:grayscale-0 group-focus:rotate-6 group-focus:scale-110 group-focus:grayscale-0"
      height={250}
      src={await download(kitBaseImageUrl)}
      width={250}
    />
  );
}
