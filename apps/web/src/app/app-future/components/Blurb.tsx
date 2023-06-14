import { H3, P } from '@kittr/ui/new';
import Link from 'next/link';

export function Blurb() {
  return (
    <div className="p-4 rounded-lg bg-zinc-800 sm:p-6">
      <H3 className="relative text-center -top-8 sm:font-bold sm:text-3xl sm:-top-10">
        play bettr with kittr.
      </H3>
      <P>
        At kittr, we strive to create a better live streaming experience for
        Twitch players, moderators, and viewers alike. kittr is the place for
        players to easily share kits with their communities in a sick-looking
        way. Everything about kittr is nice and simple - there&apos;s not much
        more to it!
      </P>

      <Link className="inline-block mt-8 underline" href="/faq">
        Learn more in our FAQ.
      </Link>
    </div>
  );
}
