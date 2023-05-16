'use client';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';

export const useCloseOnNavigate = (
  func: Dispatch<SetStateAction<boolean>>,
  pathname: string,
) => {
  useEffect(() => {
    document.getElementById('floaty-burger')?.focus();
    func(false);
  }, [pathname]);
};
