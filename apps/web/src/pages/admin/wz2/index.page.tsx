/* eslint-disable func-call-spacing */
/* eslint-disable max-len */
import { useState } from "react"
import { WarzoneTwoKitBase, WarzoneTwoKitOption } from "@kittr/prisma"
import { Button, List, Section } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import { trpc } from "@Server/createHooks"
import { KitBaseForm } from "./KitBaseForm"
import Link from "next/link"

const Page = () => {
	const { data: bases, refetch } = trpc.useQuery(["admin/warzone2/kit-bases/list"])
	const { data: game } = trpc.useQuery(["games/getByUrlSafeName", "wz2"])
	const { mutate, isLoading } = trpc.useMutation(["admin/warzone2/kit-bases/copy"], {
		onSuccess: () => refetch()
	})
	const [isCreatingBase, setIsCreatingBase] = useState(false)
	const [isEditingBase, setIsEditingBase] = useState<
		| (WarzoneTwoKitBase & {
				availableOptions: WarzoneTwoKitOption[]
		  })
		| null
	>(null)

	if (isCreatingBase) {
		console.log("Game ID", game!.id)
		return (
			<KitBaseForm
				gameId={game!.id}
				onFinished={() => {
					setIsCreatingBase(false)
					refetch()
				}}
			/>
		)
	}

	if (isEditingBase) {
		return (
			<KitBaseForm
				gameId={game!.id}
				kitBaseId={isEditingBase.id}
				onFinished={() => {
					setIsEditingBase(null)
					refetch()
				}}
			/>
		)
	}

	return (
		<div style={{ margin: "1rem" }}>
			<Link href="/admin">
				<Button onClick={() => {}}>Back to Admin Home</Button>
			</Link>
			<Section title="KIT BASES" action={<Button onClick={() => setIsCreatingBase(true)}>Create</Button>}>
				<List>
					{(bases || []).map((base) => (
						<List.Item
							style={{ borderBottom: "1px solid white", padding: "1rem" }}
							sx={(theme) => ({
								"&:hover": {
									backgroundColor: theme.colors.gray[8]
								}
							})}
						>
							{base.displayName}
							<Button
								size="sm"
								ml="xl"
								loading={isLoading}
								color="orange"
								onClick={() => mutate({ baseToCopy: base.id })}
							>
								Copy
							</Button>
							<ActionIcon radius="lg" size="lg" style={{ float: "right" }} onClick={() => setIsEditingBase(base)}>
								<SVG.Pencil />
							</ActionIcon>
						</List.Item>
					))}
				</List>
			</Section>
			{/* <Admin /> */}
		</div>
	)
}

export default Page
