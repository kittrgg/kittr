/* eslint-disable  */
import { KitBaseForm } from "./KitBaseForm"
import { trpc } from "@Server/createTRPCNext"
import { WarzoneTwoKitBase, WarzoneTwoKitOption } from "@kittr/prisma"
import { Button, List, Section } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import Link from "next/link"
import { useState } from "react"

const Page = () => {
	const { data: bases, refetch } = trpc.listKitBases.useQuery()
	const { data: game } = trpc.getGameByUrlSafeName.useQuery("wz2")
	const { mutate, isLoading } = trpc.updateBase.useMutation({
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
			<Link href="/admin" legacyBehavior>
				<Button onClick={() => {}}>Back to Admin Home</Button>
			</Link>
			<Section title="KIT BASES" action={<Button onClick={() => setIsCreatingBase(true)}>Create</Button>}>
				<List>
					{(bases || [])?.map((base) => (
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
								// TODO: Needs review
								onClick={() => mutate({ base })}
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
