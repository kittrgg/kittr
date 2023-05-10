import Link from 'next/link';
import { componentEntries } from '#/componentMap';

export function Sidebar() {
  return (
    <div className="flex flex-none flex-col gap-4 border-r p-4">
      <Link href="/">Home</Link>
      {componentEntries.map(([slug, component]) => {
        return (
          <Link href={`/${slug}`} key={component.name}>
            {'<'}
            {component.name}
            {' />'}
          </Link>
        );
      })}
    </div>
  );
}
