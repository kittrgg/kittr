/* eslint-disable func-call-spacing */
/* eslint-disable max-len */
import { useState } from "react"
import { WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma"
import { Button, List, Section } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import { trpc } from "@Server/createHooks"
import { KitBaseForm } from "./KitBaseForm"
import Link from "next/link"

const Page = () => {
	// TODO: Not sure how to handle this type error, need some backend knowledging here.
	const { data: bases, refetch } = trpc.useQuery(["admin/warzone/kit-bases/list"])
	const [isCreatingBase, setIsCreatingBase] = useState(false)
	const [isEditingBase, setIsEditingBase] = useState<
		| (WarzoneKitBase & {
				availableOptions: WarzoneKitOption[]
		  })
		| null
	>(null)

	console.log(bases)

	if (isCreatingBase) {
		console.log("Game ID", bases![0].gameId)
		return (
			<KitBaseForm
				gameId={bases![0].gameId}
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
				gameId={bases![0].gameId}
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
					{(bases || []).map((base: any) => (
						<List.Item
							style={{ borderBottom: "1px solid white", padding: "1rem" }}
							sx={(theme) => ({
								"&:hover": {
									backgroundColor: theme.colors.gray[8]
								}
							})}
						>
							{base.displayName}
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
