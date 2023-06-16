import { H1, P, H2 } from '@kittr/ui/new';
import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Want to know why kittr is so awesome?',
};

function Section({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-black rounded-xl">
      <H2>{header}</H2>
      {children}
    </div>
  );
}

function Page() {
  return (
    <div className="flex flex-col gap-6">
      <H1>About</H1>
      <Section header="Our story">
        <P>
          One day, our founder, Anthony, was watching some Warzone channels on
          Twitch. He used an !amax command to try to find out about a
          player&apos;s CR-56 AMAX setup (classic 2020). In most of the channels
          he watched, though, when viewers asked for a player&apos;s kits in
          chat, they were given the link to...an ugly Google Sheet that was hard
          to read and interact with. Let it be known: Anthony is a web
          developer. As he struggled to learn about this AMAX, all he could
          think to himself was &rdquo;Is there not a better way to do
          this?&rdquo; The idea for kittr was born.
        </P>
        <P>
          Anthony quickly enlisted the help of his sister, a then-budding web
          designer. She was just learning the craft at the time - but Anthony
          promoted her to the big leagues right then and there. As it turns out
          Ashley is a complete all-star designer so she made all of the
          beautiful design for the website that you see.
        </P>
        <P>
          Today, kittr is <strong>the kit sharing solution</strong> that video
          game players have been waiting for. We hope you like it as much as we
          do.
        </P>
      </Section>
      <Section header="What we do">
        <P>
          kittr is the place for players to{' '}
          <strong>
            easily share kits with their communities in a really nice looking
            way.
          </strong>{' '}
          We took it upon ourselves to enhance the Twitch experience for
          viewers, mods, and players alike. By providing an easy-to-use
          dashboard for player and moderators to create and edit kits, everyone
          wins!
        </P>
      </Section>
      <Section header="Who we serve">
        <P>
          Twitch players, moderators, and viewers all love using kittr because
          it looks great and is easy to use. But don&apos;t take our word for
          it. Check out{' '}
          <Link className="text-blue-600 underline" href="/channels">
            our channels
          </Link>{' '}
          and watch kittr in action. We think you&apos;ll be convinced.
        </P>
      </Section>
      <Section header="Our mission">
        <P>
          We strive to create a better streaming experience for Twitch player,
          moderators, and viewers alike. Before kittr, there wasn&apos;t a great
          way for player to share their kits with viewers. It&apos;s 2021 -
          Google Sheets just won&apos;t cut it. But don&apos;t worry, we here at
          kittr have got your back.
        </P>
      </Section>
      <Section header="Contact Us">
        <P>
          If you have any questions, try visiting{' '}
          <Link className="text-blue-600 underline" href="/faq">
            our FAQ page
          </Link>
          . If you don&apos;t find the answer you are looking for there, head
          over or{' '}
          <Link className="text-blue-600 underline" href="contact">
            our contact page
          </Link>
          .
        </P>
      </Section>
    </div>
  );
}

export default Page;
