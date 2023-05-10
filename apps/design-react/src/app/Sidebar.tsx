import Link from 'next/link';
import { componentEntries } from '#/componentMap';

export function Sidebar() {
  return (
    <div className="flex flex-col flex-none gap-4 p-4 border-r">
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
