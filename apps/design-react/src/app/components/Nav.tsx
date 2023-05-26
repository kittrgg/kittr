import {
  AppShellLinkItem,
  SidebarSeparator,
  SidebarHeader,
} from '@kittr/ui/new';
import { Library, Type, Code2 } from '@kittr/ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { componentEntries } from '#/componentMap';

export function Nav() {
  return (
    <>
      <AppShellLinkItem className="m-0 flex flex-row items-center justify-center">
        <Link className="flex flex-row items-center justify-center" href="/">
          <Image alt="kittr logo" height={48} src="/logo.svg" width={89} />
        </Link>
      </AppShellLinkItem>
      <SidebarSeparator />

      <SidebarHeader>Utilities</SidebarHeader>
      <AppShellLinkItem>
        <Link href="/icons">
          <Library />
          Icons
        </Link>
      </AppShellLinkItem>
      <AppShellLinkItem>
        <Link href="/typography">
          <Type />
          Typography
        </Link>
      </AppShellLinkItem>
      <SidebarSeparator />

      <SidebarHeader>Components</SidebarHeader>
      {componentEntries
        .filter(
          ([_, component]) => !['Icons', 'Typography'].includes(component.name),
        )
        .map(([slug, component]) => {
          return (
            <AppShellLinkItem key={slug}>
              <Link href={`/${slug}`}>
                <Code2 />
                {component.name}
              </Link>
            </AppShellLinkItem>
          );
        })}
    </>
  );
}
