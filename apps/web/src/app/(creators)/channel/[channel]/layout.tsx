import type { ReactNode } from 'react';
import { LayoutWrapper } from './components/LayoutWrapper';

export function Layout({
  children,
  params,
}: {
  params: { channel: string };
  children: ReactNode;
}) {
  return (
    <LayoutWrapper creatorUrlSafeName={params.channel}>
      {children}
    </LayoutWrapper>
  );
}

export default Layout;
