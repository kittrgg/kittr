/* eslint-disable */
import { trpc } from '@/lib/trpc';
import { WarzoneKitOption } from '@kittr/prisma';
import { Button, NumberInput, SubSection, Text, TextInput } from '@kittr/ui';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5rem;
`;

type FormState = WarzoneKitOption;

interface Props {
  initialValues: Partial<FormState> | null;
  onFinished: () => void;
}

export const KitBaseOptionForm = ({ initialValues, onFinished }: Props) => {
  const { mutate: updateOption } =
    trpc.admin.warzone.kitBases.options.update.useMutation();
  const { mutate: createOption } =
    trpc.admin.warzone.kitBases.options.create.useMutation();
  const { mutate: deleteOption } =
    trpc.admin.warzone.kitBases.options.delete.useMutation();

  const [formValues, setFormValues] = useState<Partial<FormState>>(
    initialValues || {},
  );

  const changeTextField = (key: keyof FormState) => (e: any) => {
    setFormValues((formValues) => ({ ...formValues, [key]: e.target.value }));
  };

  const changeNumberField = (key: keyof FormState) => (e: any) => {
    setFormValues((formValues) => ({ ...formValues, [key]: e }));
  };

  return (
    <SubSection
      title={
        initialValues?.id
          ? `Editing Kit Base Option: ${initialValues?.displayName}`
          : 'Creating Kit Base Option'
      }
      action={
        <>
          {initialValues?.id && (
            <Text color="gray">Option ID: {initialValues.id}</Text>
          )}
          {initialValues?.kitBaseId && (
            <Text color="gray">Base ID: {initialValues.kitBaseId}</Text>
          )}
          {initialValues?.gameId && (
            <Text color="gray">Game ID: {initialValues.gameId}</Text>
          )}
        </>
      }
    >
      <Container>
        <TextInput
          label="Display Name"
          placeholder="Display Name"
          value={formValues.displayName}
          onChange={changeTextField('displayName')}
        />
      </Container>

      <Container>
        <NumberInput
          label="Order Placement"
          placeholder="Order Placement"
          type="number"
          value={formValues.orderPlacement}
          onChange={changeNumberField('orderPlacement')}
        />
      </Container>

      <Container>
        <TextInput
          label="Slot Key"
          placeholder="Slot Key"
          value={formValues.slotKey}
          onChange={changeTextField('slotKey')}
        />
      </Container>

      <div>
        <Button
          variant="outline"
          onClick={onFinished}
          style={{ margin: '1rem 1rem 0rem 0rem' }}
        >
          Cancel
        </Button>
        <Button
          variant="filled"
          style={{ margin: '1rem 1rem 0rem 0rem' }}
          onClick={() => {
            if (formValues.id) {
              updateOption(formValues as FormState, {
                onSuccess: onFinished,
              });
            } else {
              if (!formValues.kitBaseId) {
                console.error(
                  'You must create the kit first before adding options! We need the kitBaseId to associate them! :)',
                );
              } else {
                console.log({
                  baseId: formValues.kitBaseId,
                  option: formValues,
                });
                createOption(
                  {
                    baseId: formValues.kitBaseId,
                    option: formValues as FormState,
                  },
                  {
                    onSuccess: onFinished,
                  },
                );
              }
            }
          }}
        >
          Save
        </Button>
        {formValues?.id && (
          <Button
            color="red"
            onClick={() => {
              deleteOption(
                { optionId: formValues.id! },
                {
                  onSuccess: onFinished,
                },
              );
            }}
          >
            Delete
          </Button>
        )}
      </div>
    </SubSection>
  );
};
