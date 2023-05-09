import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDidMountEffect = (func: any, deps: any) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      func();
    } else {
      mounted.current = true;
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, deps);
};
