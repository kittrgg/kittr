import { useEffect } from 'react';

/**
 * Locks the scrolling of an element.
 *
 * @params
 *
 * ref: React ref to a DOM element.
 *
 * active: Optional parameter to activate/release the lock. Defaults to true.
 *
 * initialValue: Optional css overflow value to set on the element when releasing the lock. Defaults to auto.
 * */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLockElementScroll = (
  ref: any,
  active = true,
  initialValue = 'auto',
) => {
  useEffect(() => {
    const currentRef = ref.current;

    if (active && ref.current) {
      ref.current.style.overflowY = 'hidden';
    }

    return () => {
      if (currentRef?.style) {
        currentRef.style.overflowY = initialValue;
      }
    };
  }, [active, initialValue, ref]);
};
