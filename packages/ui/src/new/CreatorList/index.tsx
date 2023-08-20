'use client';

import type { CreatorListItemProps } from './Item';
import { CreatorListItem } from './Item';

export interface CreatorListProps {
  // Typed copied from next/link internals
  linkComponent: React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
      React.RefAttributes<HTMLAnchorElement> & {
        children?: React.ReactNode;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } & { href: any }
  >;
  linkBasePath: string;
  creators: Omit<CreatorListItemProps, 'linkBasePath' | 'linkComponent'>[];
  disableResponsive?: boolean;
}

export const CreatorList = ({
  creators,
  linkBasePath,
  linkComponent,
  disableResponsive,
}: CreatorListProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        disableResponsive ? '' : 'lg:grid-cols-3 xl:grid-cols-4'
      }`}
    >
      {creators.map((creator) => {
        return (
          <CreatorListItem
            linkComponent={linkComponent}
            linkBasePath={linkBasePath}
            key={creator.name}
            hasAvatar={creator.hasAvatar}
            id={creator.id}
            name={creator.name}
            urlSafeName={creator.urlSafeName}
            isLive={creator.isLive}
          />
        );
      })}
    </div>
  );
};
