import type { WarzoneTwoKitBase, WarzoneTwoKitOption } from '@kittr/prisma';
import { Button, List, Section, SVG } from '@kittr/ui';
import { ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { KitBaseForm } from '@Features/Admin/create-game/wz2/KitBaseForm';
import { trpc } from '@/lib/trpc';

function Page() {
  const { data: bases, refetch } = trpc.admin.warzone2.kitBases.list.useQuery();
  const { data: game } = trpc.games.getByUrlSafeName.useQuery('wz2');
  const { mutate, isLoading } = trpc.admin.warzone2.kitBases.update.useMutation(
    {
      onSuccess: () => refetch(),
    },
  );
  const [isCreatingBase, setIsCreatingBase] = useState(false);
  const [isEditingBase, setIsEditingBase] = useState<
    | (WarzoneTwoKitBase & {
        availableOptions: WarzoneTwoKitOption[];
      })
    | null
  >(null);

  if (isCreatingBase) {
    console.log('Game ID', game!.id);
    return (
      <KitBaseForm
        gameId={game!.id}
        onFinished={() => {
          setIsCreatingBase(false);
          refetch();
        }}
      />
    );
  }

  if (isEditingBase) {
    return (
      <KitBaseForm
        gameId={game!.id}
        kitBaseId={isEditingBase.id}
        onFinished={() => {
          setIsEditingBase(null);
          refetch();
        }}
      />
    );
  }

  return (
    <div style={{ margin: '1rem' }}>
      <Link href="/admin" legacyBehavior>
        <Button onClick={() => {}}>Back to Admin Home</Button>
      </Link>
      <Section
        action={<Button onClick={() => setIsCreatingBase(true)}>Create</Button>}
        title="KIT BASES"
      >
        <List>
          {(bases || []).map((base) => (
            <List.Item
              style={{ borderBottom: '1px solid white', padding: '1rem' }}
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor: theme.colors.gray[8],
                },
              })}
            >
              {base.displayName}
              <Button
                loading={isLoading}
                ml="xl"
                size="sm"
                color="orange"
                // TODO: Needs review
                onClick={() =>
                  mutate({
                    base: base,
                    commandCodes: base.commandCodes.join(','),
                  })
                }
              >
                Copy
              </Button>
              <ActionIcon
                onClick={() => setIsEditingBase(base)}
                radius="lg"
                size="lg"
                style={{ float: 'right' }}
              >
                <SVG.Pencil />
              </ActionIcon>
            </List.Item>
          ))}
        </List>
      </Section>
      {/* <Admin /> */}
    </div>
  );
}

export default Page;
