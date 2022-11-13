/* eslint-disable max-len */
import colors from "@Colors"
import { useUser } from "@Hooks/useUser"
import { Routes } from "@Utils/lookups/routes"
import { Text } from "@kittr/ui"
import { Center, Grid } from "@mantine/core"
import Link from "next/link"

const StyledLink = ({ href, children }: { href: string; children: string }) => (
	<Link href={href} passHref>
		<Text color={colors.white} m="18px" sx={{ textDecoration: "none", textAlign: "center", cursor: "pointer" }}>
			{children}
		</Text>
	</Link>
)

const Footer = () => {
	const user = useUser()
	const isLoggedIn = !!user?.uid

	return (
		<Center style={{ flexDirection: "column", backgroundColor: colors.light, padding: "60px", gap: "10px" }}>
			<Grid grow columns={20}>
				<Grid.Col span={2}>
					<StyledLink href={Routes.ROOT}>HOME</StyledLink>
				</Grid.Col>
				<Grid.Col span={2}>
					<StyledLink href={Routes.GAMES.LIST} data-cy="footer-games-link">
						GAMES
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={2}>
					<StyledLink href={Routes.CHANNEL.LIST} data-cy="footer-channels-link">
						CHANNELS
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={2}>
					<StyledLink href={Routes.ABOUT} data-cy="footer-about-link">
						ABOUT
					</StyledLink>
				</Grid.Col>

				<Grid.Col span={2}>
					<StyledLink href={Routes.FAQ} data-cy="footer-faq-link">
						FAQ
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={4}>
					<StyledLink href={Routes.CONTACT} data-cy="footer-contact-link">
						CONTACT US
					</StyledLink>
				</Grid.Col>

				{!isLoggedIn && (
					<Grid.Col span={2}>
						<StyledLink href={Routes.DASHBOARD} data-cy="footer-dashboard-link">
							SIGN IN
						</StyledLink>
					</Grid.Col>
				)}
			</Grid>
			<Center>
				<img src="/media/logo.svg" alt="" width={106} height={50} />
			</Center>

			<Grid>
				<Grid.Col span={6}>
					<StyledLink href={Routes.TERMS} data-cy="footer-terms-link">
						TERMS
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={6}>
					<StyledLink href={Routes.PRIVACY} data-cy="footer-privacy-link">
						PRIVACY
					</StyledLink>
				</Grid.Col>
			</Grid>

			<Grid>
				<Grid.Col span={6}>
					<a href={Routes.DISCORD} target="_blank" rel="noopener noreferrer" style={{ margin: "12px 24px" }}>
						<img src="/media/icons/discord.svg" alt="Discord Logo Link" width={50} height={50} />
					</a>
				</Grid.Col>
				<Grid.Col span={6}>
					<a href={Routes.TWITTER} target="_blank" rel="noopener noreferrer" style={{ margin: "12px 24px" }}>
						<img src="/media/icons/twitter.svg" alt="Twitter Logo Link" width={50} height={50} />
					</a>
				</Grid.Col>
			</Grid>
		</Center>
	)
}

export default Footer
