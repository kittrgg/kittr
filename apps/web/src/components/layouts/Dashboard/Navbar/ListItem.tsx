import { ReactNode } from "react"
import { Button, Collapse, useMantineTheme } from "ui"
import { useRouter } from "next/router"
import Link from "next/link"
interface Props {
	path: string
	buttonLabel: string
	icon: JSX.Element
	children?: ReactNode
}

const ListItem = ({ path, icon, buttonLabel, children }: Props) => {
	const { route } = useRouter()
	const { colors, spacing } = useMantineTheme()

	return (
		<>
			<Link href={path} passHref>
				<Button
					variant="subtle"
					asLink
					fullWidth
					leftIcon={icon}
					styles={{
						icon: { marginRight: spacing.lg },
						inner: { justifyContent: "flex-start", color: colors.navy[9] }
					}}
				>
					{buttonLabel}
				</Button>
			</Link>
			<Collapse in={path === route}>{children}</Collapse>
		</>
	)
}

export default ListItem

{
	/* <Link href="/dashboard" passHref>
<Button
	component="a"
	leftIcon={<SVG.Box width="25px" />}
	color="yellow"
	fullWidth
	variant="subtle"
	radius="xl"
	size="md"
	styles={{ root: { color: colors.gray[9] } }}
>
	Dashboard
</Button>
</Link>
<Link href="/dashboard/my-events" passHref>
<Button
	component="a"
	leftIcon={<SVG.Box width="25px" />}
	color="yellow"
	fullWidth
	variant="subtle"
	radius="xl"
	size="md"
	styles={{ root: { color: colors.gray[9] } }}
>
	My Events
</Button>
</Link>
<Link href="/dashboard/my-dogs" passHref>
<Button
	component="a"
	leftIcon={<SVG.Box width="25px" />}
	color="yellow"
	fullWidth
	variant="subtle"
	radius="xl"
	size="md"
	styles={{ root: { color: colors.gray[9] } }}
>
	Dogs
</Button>
</Link> */
}
