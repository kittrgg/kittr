// import Admin from "@Features/Admin"
import { WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma"
import { List, Section } from "@kittr/ui"
import SVG from "@kittr/ui/src/components/SVG"
import { ActionIcon } from "@mantine/core"
import { trpc } from "@Server/createHooks"
import { useState } from "react"
import { KitBaseForm } from "./admin/KitBaseForm"

const Page = ({ ...props }) => {
	const { data: bases } = trpc.useQuery(["admin/warzonekit-bases/list"])
	const [isEditingBase, setIsEditingBase] = useState<
		| (WarzoneKitBase & {
				availableOptions: WarzoneKitOption[]
		  })
		| null
	>(null)

	if (isEditingBase) {
		return <KitBaseForm base={isEditingBase} onFinished={() => setIsEditingBase(null)} />
	}

	return (
		<div style={{ margin: "1rem" }}>
			<Section title="KIT BASES">
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
