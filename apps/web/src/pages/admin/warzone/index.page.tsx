import type { WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma";
import { Button, List, Section, SVG } from "@kittr/ui";
import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { KitBaseForm } from "./KitBaseForm";
import { trpc } from "@/lib/trpc";

function Page() {
  const { data: bases, refetch } = trpc.admin.warzone.kitBases.list.useQuery();
  const [isCreatingBase, setIsCreatingBase] = useState(false);
  const [isEditingBase, setIsEditingBase] = useState<
    | (WarzoneKitBase & {
        availableOptions: WarzoneKitOption[];
      })
    | null
  >(null);

  if (isCreatingBase) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log("Game ID", bases![0].gameId);
    return (
      <KitBaseForm
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        gameId={bases![0].gameId}
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        gameId={bases![0].gameId}
        kitBaseId={isEditingBase.id}
        onFinished={() => {
          setIsEditingBase(null);
          refetch();
        }}
      />
    );
  }

  return (
    <div style={{ margin: "1rem" }}>
      <Link href="/admin" legacyBehavior>
        <Button onClick={() => ({})}>Back to Admin Home</Button>
      </Link>
      <Section
        action={<Button onClick={() => setIsCreatingBase(true)}>Create</Button>}
        title="KIT BASES"
      >
        <List>
          {(bases || []).map((base) => (
            <List.Item
              key={base.id}
              style={{ borderBottom: "1px solid white", padding: "1rem" }}
              sx={(theme) => ({
                "&:hover": {
                  backgroundColor: theme.colors.gray[8],
                },
              })}
            >
              {base.displayName}
              <ActionIcon
                onClick={() => setIsEditingBase(base)}
                radius="lg"
                size="lg"
                style={{ float: "right" }}
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
