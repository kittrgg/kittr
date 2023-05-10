import { H1 } from '@kittr/ui/new';
import { notFound } from 'next/navigation';
import { components, componentEntries } from '#/componentMap';

export function generateStaticParams() {
  return componentEntries.map(([slug]) => {
    return {
      component: slug,
    };
  });
}

function Page({ params }: { params: { component: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!components[params.component]) return notFound();

  return (
    <>
      <H1 className="border-b pb-4">{components[params.component].name}</H1>
      <div className="mt-8 flex flex-col gap-6">
        {components[params.component].components.map((comp) => comp)}
      </div>
    </>
  );
}

export default Page;
