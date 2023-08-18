import { Prose } from '@kittr/ui/new';
import type { Metadata } from 'next';
import { prisma } from './prisma';

export const metadata: Metadata = {
  description: "kittr's React UI Kit",
  title: 'React Kit - kittr',
};

export default async function Home() {
  const data = await prisma.game.findMany();
  const data2 = await prisma.administrator.findMany();

  return (
    <Prose className="prose-invert">
      <h1>Welcome to the component showcase.</h1>
      <p>
        The page you are looking at uses our <code>{'<AppShell />'}</code>{' '}
        component. It will handle responsive layouts for you automatically.
      </p>
      <p>
        Additionally, this copy is handled by Tailwind&apos;s <code>prose</code>
        . We will use it on blogs, guides, and other long form text sections.
      </p>
      <p>
        In the sidebar, you&apos;ve got a directory of the components available
        to you in our component library. It&apos;s pretty much{' '}
        <a href="https://ui.shadcn.com">ui.shadcn.com</a> with us barely
        sprinkling anything extra on top.
      </p>
      <p>Enjoy.</p>
    </Prose>
  );
}
