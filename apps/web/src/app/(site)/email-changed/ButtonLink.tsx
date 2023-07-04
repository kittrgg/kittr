'use client';

import Link from 'next/link';
import { Button } from '@kittr/ui/new';

export function BackToDashboard() {
  return (
    <Button asChild variant="white">
      <Link href="/dashboard">Back to login</Link>
    </Button>
  );
}
