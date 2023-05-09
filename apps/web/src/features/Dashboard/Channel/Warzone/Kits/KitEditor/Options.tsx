import { Selector } from '@Components/shared';
import { useOptionsByKitBase } from '@Hooks/api/useOptionsbyKitBase';
import { useIsMounted } from '@Hooks/useIsMounted';
import { updateOptions } from '@Redux/slices/dashboard';
import { useActiveKit } from '@Redux/slices/dashboard/selectors';
import { useDispatch } from '@Redux/store';
import { getArrayUniques } from '@Utils/helpers/getArrayUniques';
import { warzoneSlotsOrder } from '@Utils/lookups/warzoneSlotsOrder';
import { Loader } from '@kittr/ui';
import React, { useState, useEffect } from 'react';
import * as Styled from './style';
import { trpc } from '@/lib/trpc';

const animationDuration = 1000;

function Options() {
  const dispatch = useDispatch();
  const { base, options: current } = useActiveKit();
  const isMounted = useIsMounted();
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const { data: availableOptions, isLoading } = useOptionsByKitBase(base.id);

  useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        setAnimationTrigger(false);
      }
    }, animationDuration);
  }, [animationTrigger, isMounted]);

  const slots =
    availableOptions &&
    getArrayUniques(availableOptions, 'slotKey').sort(
      (a: string, b: string) =>
        warzoneSlotsOrder.indexOf(a) - warzoneSlotsOrder.indexOf(b),
    );

  const addToOptions = (displayName: string, slot: string) => {
    const newCurrent = current.slice();

    if (displayName === '') {
      const index = newCurrent.findIndex((elem) => elem.slotKey === slot);
      newCurrent.splice(index, 1);
      return dispatch(updateOptions(newCurrent));
    }

    const toAdd = availableOptions?.find(
      (opt) => opt.displayName === displayName && opt.slotKey === slot,
    );

    const index = newCurrent.findIndex(
      (elem) => elem.slotKey === toAdd?.slotKey,
    );

    if (!toAdd) return;

    if (index > -1) {
      newCurrent[index] = toAdd;
    } else {
      newCurrent.push(toAdd);
    }

    if (newCurrent.length > base.maxOptions) return setAnimationTrigger(true);
    return dispatch(updateOptions(newCurrent));
  };

  return (
    <Styled.Container>
      <Styled.HorizFlex>
        <Styled.Header>ATTACHMENTS</Styled.Header>
        <Styled.HeaderHelper
          animate={animationTrigger}
          animationDuration={animationDuration}
        >
          (Limit {base.maxOptions})
        </Styled.HeaderHelper>
      </Styled.HorizFlex>
      <Styled.AttachmentsFlex>
        {isLoading ? <Loader /> : null}
        {!isLoading && availableOptions
          ? slots?.map((slot: string) => {
              return (
                <div
                  key={slot}
                  style={{ marginBottom: '18px', flexBasis: '40%' }}
                >
                  <Styled.Header>{slot}</Styled.Header>
                  <Selector
                    className={`${slot.replace(/ /g, '-')}-selector`}
                    isSearchable={false}
                    onChange={(e: any) => addToOptions(e.value, slot)}
                    options={[
                      {
                        label: '-',
                        value: '',
                      },
                      ...availableOptions
                        .filter((opt) => opt.slotKey === slot)
                        .sort(
                          (a, b) =>
                            Number(a.orderPlacement) - Number(b.orderPlacement),
                        )
                        .map((option) => ({
                          label: option.displayName,
                          value: option.displayName,
                        })),
                    ]}
                    value={{
                      label: current.find((opt) => opt.slotKey === slot)
                        ? current.find((opt) => opt.slotKey === slot)
                            ?.displayName
                        : '-',
                    }}
                  />
                </div>
              );
            })
          : null}
      </Styled.AttachmentsFlex>
    </Styled.Container>
  );
}

export default Options;
