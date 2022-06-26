// import Admin from "@Features/Admin"
import { Accordion, Section } from "@kittr/ui"
import { trpc } from "@Server/createHooks"

const Page = ({ ...props }) => {
	const { data: bases } = trpc.useQuery(["admin/warzonekit-bases/list", {}])

	return (
		<>
			<Section title="KIT BASES">
				<Accordion items={(bases || []).map((base) => ({ title: base.displayName, content: <p>Test</p> }))} />
			</Section>
			{/* <Admin /> */}
		</>
	)
}

export default Page
