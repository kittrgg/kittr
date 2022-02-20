import { ReactNode, useState } from "react"
import { AppShell } from "ui"
import Header from "./Header"
import Navbar from "./Navbar"

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	const [opened, setOpened] = useState(false)

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			padding="md"
			header={<Header opened={opened} setOpened={setOpened} />}
			navbar={<Navbar opened={opened} setOpened={setOpened} />}
		>
			{children}
		</AppShell>
	)
}

export const getLayout = (page: any) => <Layout>{page}</Layout>

export default Layout
