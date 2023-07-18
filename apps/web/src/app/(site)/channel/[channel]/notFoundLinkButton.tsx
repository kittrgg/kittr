'use client';

import { Button } from '@kittr/ui/new';
import Link from 'next/link';

export function NotFoundLinkButton() {
  return (
    <Button asChild variant="white">
      <Link href="/channels">Back to creators</Link>
    </Button>
  );
}
