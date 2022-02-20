import { Title, Header, Text, Container, useMantineTheme } from "ui"
import Image from "next/image"

import { Blob } from "./Blob"

const Home = () => {
	const theme = useMantineTheme()

	return (
		<div style={{ minHeight: "100vh" }}>
			<Header
				height={70}
				padding="md"
				styles={{
					root: {
						background: "transparent",
						borderBottom: "none"
					}
				}}
			>
				<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
					<Image src="/logo-with-text.png" alt="Doggo Logo" width={136} height={52} />
					{/* <MediaQuery largerThan={100000000000000} styles={{ display: "none" }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.red[6]}
								mr="xl"
							/>
						</MediaQuery> */}
				</div>
			</Header>
			<Blob />
			<Container fluid style={{ position: "relative", zIndex: "10", height: "100%", padding: "10% 10% 0" }}>
				<Title sx={{ fontSize: "32px", fontWeight: 600, color: theme.colors.blue[9] }} order={1}>
					Your dog's sporting event, simplified.
				</Title>
				<Text sx={{ fontSize: "18px", paddingTop: "5%", color: theme.colors.blue[9] }}>
					Stay tuned. We're about to throw a pretty yummy bone to dog athletes and their owners.
				</Text>
			</Container>
			<div
				style={{
					position: "fixed",
					bottom: 0,
					right: 0,
					width: "100vw",
					display: "flex",
					justifyContent: "flex-end"
				}}
			>
				<img src="/pupper.png" alt="" style={{ maxHeight: "50vh" }} />
			</div>
		</div>
	)
}

export default Home
