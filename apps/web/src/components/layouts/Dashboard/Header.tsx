import type { Dispatch, SetStateAction } from "react"
import { Image } from "ui"
// import { Image } from "src/components/shared"
import { MediaQuery, Burger, Header, useMantineTheme, Center } from "ui"
import { imageDict } from "@Utils/imageDict"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const HeaderComp = ({ opened, setOpened }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<Header
			height={100}
			padding="lg"
			styles={{
				root: {
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: colors.yellow[0]
				}
			}}
		>
			<Image src={imageDict.logoWithText.src} alt={imageDict.logoWithText.alt} width="9rem" height="3.75rem" />
			<MediaQuery largerThan="sm" styles={{ display: "none" }}>
				<Center>
					<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={colors.gray[6]} mr="xl" />
				</Center>
			</MediaQuery>
		</Header>
	)
}

export default HeaderComp
