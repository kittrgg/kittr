import { useActiveWeapon } from '@Redux/slices/displayr/selectors';
import type { WarzoneKit, WarzoneKitBase } from '@kittr/prisma';
import { useEffect, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as Styled from './style';
import Item from './Item';

interface Props {
  availableKits: (WarzoneKit & { base: WarzoneKitBase })[];
}

function KitScroller({ availableKits }: Props) {
  const activeWeapon = useActiveWeapon();
  const [mask, setMask] = useState<'left' | 'right' | 'both' | 'none'>('left');
  const containerRef = useRef<HTMLDivElement>(null);

  const matchedBase = availableKits
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    .filter((elem) => elem.base.displayName === activeWeapon.base?.displayName)
    .sort((a, b) => {
      if ((a.customTitle ?? '') < (b.customTitle ?? '')) return -1;
      if ((a.customTitle ?? '') > (b.customTitle ?? '')) return 1;
      return 0;
    });

  useEffect(() => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      if (scrollLeft + clientWidth === scrollWidth && scrollLeft === 0) {
        return setMask('none');
      }
    }
  }, [activeWeapon]);

  // This is needed because dismounting the ref can cause problems...Can this be resolved?
  if (matchedBase.length === 1)
    return (
      <ScrollContainer
        innerRef={containerRef}
        style={{ display: 'none', width: '0', height: '0' }}
      />
    );

  return (
    <ScrollContainer
      hideScrollbars
      horizontal
      innerRef={containerRef}
      onScroll={() => {
        if (containerRef.current) {
          const position = containerRef.current.scrollLeft;
          const clientWidth = containerRef.current.clientWidth;
          const maxScroll = containerRef.current.scrollWidth;

          if (position === 0) {
            return setMask('right');
          }

          if (position + clientWidth === maxScroll) {
            return setMask('left');
          }

          setMask('both');
        }
      }}
      style={{
        height: '36px',
        cursor: 'grab',
        WebkitMaskImage:
          mask === 'right'
            ? 'linear-gradient(to right, black 75%, transparent 100%)'
            : mask === 'left'
            ? 'linear-gradient(to left, black 25%, transparent 100%)'
            : mask === 'both'
            ? 'linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)'
            : '',
        maskImage:
          mask === 'right'
            ? 'linear-gradient(to right, black 75%, transparent 100%)'
            : mask === 'left'
            ? 'linear-gradient(to left, black 25%, transparent 100%)'
            : mask === 'both'
            ? 'linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)'
            : '',
      }}
      vertical={false}
    >
      <Styled.Wrapper>
        {matchedBase
          .sort((a, b) => Number(b.featured) - Number(a.featured))
          .map((elem) => {
            return <Item elem={elem} key={elem.id} />;
          })}
      </Styled.Wrapper>
    </ScrollContainer>
  );
}

export default KitScroller;
