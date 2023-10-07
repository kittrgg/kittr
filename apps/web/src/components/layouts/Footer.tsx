import colors from '@Colors';
import { useUser } from '@Hooks/useUser';
import { Routes } from '@Utils/lookups/routes';
import { Text } from '@kittr/ui';
import { Center, Grid } from '@mantine/core';
import Link from 'next/link';

function StyledLink({ href, children }: { href: string; children: string }) {
	return (
		<Link href={href} legacyBehavior passHref>
			<Text
				color={colors.white}
				m="18px"
				sx={{ textDecoration: 'none', textAlign: 'center', cursor: 'pointer' }}
			>
				{children}
			</Text>
		</Link>
	);
}

function Footer() {
	const user = useUser();
	const isLoggedIn = Boolean(user?.uid);

	return (
		<Center
			style={{
				flexDirection: 'column',
				backgroundColor: colors.light,
				padding: '60px',
				gap: '10px',
			}}
		>
			<Grid columns={20} grow>
				<Grid.Col span={2}>
					<StyledLink href={Routes.ROOT}>HOME</StyledLink>
				</Grid.Col>
				<Grid.Col span={2}>
					<StyledLink data-cy="footer-games-link" href={Routes.GAMES.LIST}>
						GAMES
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={2}>
					<StyledLink data-cy="footer-channels-link" href={Routes.CHANNEL.LIST}>
						CHANNELS
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={2}>
					<StyledLink data-cy="footer-about-link" href={Routes.ABOUT}>
						ABOUT
					</StyledLink>
				</Grid.Col>

				<Grid.Col span={2}>
					<StyledLink data-cy="footer-faq-link" href={Routes.FAQ}>
						FAQ
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={4}>
					<StyledLink data-cy="footer-contact-link" href={Routes.CONTACT}>
						CONTACT US
					</StyledLink>
				</Grid.Col>

				{!isLoggedIn && (
					<Grid.Col span={2}>
						<StyledLink data-cy="footer-dashboard-link" href={Routes.DASHBOARD}>
							SIGN IN
						</StyledLink>
					</Grid.Col>
				)}
			</Grid>
			<Center>
				<img alt="" height={50} src="/media/logo.svg" width={106} />
			</Center>

			<Grid>
				<Grid.Col span={6}>
					<StyledLink data-cy="footer-terms-link" href={Routes.TERMS}>
						TERMS
					</StyledLink>
				</Grid.Col>
				<Grid.Col span={6}>
					<StyledLink data-cy="footer-privacy-link" href={Routes.PRIVACY}>
						PRIVACY
					</StyledLink>
				</Grid.Col>
			</Grid>

			<Grid>
				<Grid.Col span={6}>
					<a
						href={Routes.DISCORD}
						rel="noopener noreferrer"
						style={{ margin: '12px 24px' }}
						target="_blank"
					>
						<img
							alt="Discord Logo Link"
							height={50}
							src="/media/icons/discord.svg"
							width={50}
						/>
					</a>
				</Grid.Col>
				<Grid.Col span={6}>
					<a
						href={Routes.TWITTER}
						rel="noopener noreferrer"
						style={{ margin: '12px 24px' }}
						target="_blank"
					>
						<img
							alt="Twitter Logo Link"
							height={50}
							src="/media/icons/twitter.svg"
							width={50}
						/>
					</a>
				</Grid.Col>
			</Grid>
		</Center>
	);
}

export default Footer;
