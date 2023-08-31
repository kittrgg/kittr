'use client';

import { Gem } from '@kittr/ui/icons';
import { H1 } from '@kittr/ui/new';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Success() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Would cause weird loop
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 bg-gradient-to-br from-fuchsia-600 to-fuchsia-800">
      <H1 className="tracking-wide">WELCOME TO PREMIUM KITTR.</H1>
      <Gem className="animate-bounce" height="100px" width="100px" />
    </div>
  );
}
