'use client';

import { Button } from '@kittr/ui/new';

export function ContactButton({ link, text }: { link: string; text: string }) {
  return (
    <Button asChild variant="outline">
      <a href={link} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    </Button>
  );
}
