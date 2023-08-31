'use client';

import { Star } from '@kittr/ui/icons';
import { AppShellLinkItem, Input, cn } from '@kittr/ui/new';
import Link from 'next/link';
import { useState } from 'react';

export function KitListing({
  gameUrlSafeName,
  channelUrlSafename,
  kitNames,
}: {
  kitNames: { name: string; count: number; featured: boolean }[];
  channelUrlSafename: string;
  gameUrlSafeName: string;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Input
        className="text-zinc-700 bg-zinc-200"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search..."
        type="text"
        value={searchTerm}
      />
      {kitNames
        .filter((kit) => {
          if (!searchTerm) return true;

          return kit.name.toUpperCase().includes(searchTerm.toUpperCase());
        })
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => Number(b.featured) - Number(a.featured))
        .map((kit) => {
          return (
            <AppShellLinkItem key={kit.name}>
              <Link
                className={cn(
                  'pl-2 font-medium ',
                  kit.featured
                    ? 'from-white from-[25px] to-yellow-200 text-transparent bg-clip-text bg-gradient-to-r'
                    : '',
                )}
                href={`/channel/${channelUrlSafename}/${gameUrlSafeName}/${encodeURI(
                  kit.name,
                )}`}
              >
                {kit.name}
                {kit.featured ? (
                  <Star className="relative w-4 h-4 text-yellow-500 !top-1.5 fill-yellow-500" />
                ) : null}
              </Link>
            </AppShellLinkItem>
          );
        })}
    </>
  );
}
