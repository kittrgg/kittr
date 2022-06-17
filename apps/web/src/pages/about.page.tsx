import Link from "next/link"
import { Title, createStyles, Grid } from "@mantine/core"

import { Routes } from "@Utils/lookups/routes"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import colors from "@Colors"
import PageWrapper from "@Components/layouts/PageWrapper"

const About = ({ ...props }) => {
	const { width } = useViewportDimensions()
	const { classes } = useStyles()

	return (
		<PageWrapper title="About Us | kittr" description="Learn about the two of us that make kittr.">
			<Title order={1} className={classes.h1}>
				ABOUT
			</Title>
			<Grid className={classes.grid}>
				<Grid.Col className={classes.container} style={{ gridColumn: "span 3" }}>
					<Title order={2} className={classes.h2}>
						OUR STORY
					</Title>
					<p>
						One day, our founder, Anthony, was watching some Warzone channels on Twitch. He used{" "}
						<strong>an !amax command</strong> to try to find out about a player's CR-56 AMAX setup (classic 2020). In
						most of the channels he watched, though, when viewers asked for a player's kits in chat, they were given the
						link to...an ugly Google Sheet that was hard to read and interact with. Let it be known: Anthony is a web
						developer. As he struggled to learn about this AMAX, all he could think to himself was "Is there not a
						better way to do this?" The idea for kittr was born.
					</p>
					<p>
						Anthony quickly enlisted the help of his sister, a then-budding web designer. She was just learning the
						craft at the time - but Anthony promoted her to the big leagues right then and there. As it turns out Ashley
						is a complete all-star designer so she made all of the beautiful design for the website that you see.
					</p>
					<p>
						Today, kittr is the <strong>kit sharing solution</strong> that video game players have been waiting for. We
						hope you like it as much as we do.
					</p>
				</Grid.Col>
				<Grid.Col
					className={classes.container}
					style={{ gridColumn: (width as number) > 1000 ? "span 2" : "1 / span 1" }}
				>
					<Title order={2} className={classes.h2}>
						WHAT WE DO
					</Title>
					<p>
						kittr is the place for players to{" "}
						<strong>easily share kits with their communities in a really nice looking way.</strong> We took it upon
						ourselves to enhance the Twitch experience for viewers, mods, and players alike. By providing an easy-to-use
						dashboard for player and moderators to create and edit kits, everyone wins!
					</p>
				</Grid.Col>
				<Grid.Col
					className={classes.container}
					style={{ gridColumn: (width as number) > 1000 ? "span 1" : "1 / span 1" }}
				>
					<Title order={2} className={classes.h2}>
						WHO WE SERVE
					</Title>
					<p>
						Twitch <strong>players</strong>, <strong>moderators</strong>, and <strong>viewers</strong> all love using
						kittr because it looks great and is easy to use. But don't take our word for it. Check out the channels of
						the channels on <Link href={Routes.CHANNEL.LIST}>our channels</Link> and watch kittr in action. We think
						you'll be convinced.
					</p>
				</Grid.Col>
				<Grid.Col className={classes.container} style={{ gridColumn: "span 3" }}>
					<Title order={2} className={classes.h2}>
						OUR MISSION
					</Title>
					<p>
						We strive to create a <strong>better channeling experience</strong> for Twitch player, moderators, and
						viewers alike. Before kittr, there wasn’t a great way for player to share their kits with viewers. It’s 2021
						- Google Sheets just won’t cut it. But don’t worry, we here at kittr have got your back.
					</p>
				</Grid.Col>
				<Grid.Col className={classes.container} style={{ gridColumn: "span 3" }}>
					<Title order={2} className={classes.h2}>
						CONTACT US
					</Title>
					<p>
						If you have any questions, try visiting{" "}
						<Link href={Routes.FAQ}>
							<a>our FAQ page</a>
						</Link>
						. If you don't find the answer you are looking for there, head over or{" "}
						<Link href={Routes.CONTACT}>our contact page</Link>.
					</p>
				</Grid.Col>
			</Grid>
		</PageWrapper>
	)
}

export default About

const useStyles = createStyles((theme) => {
	return {
		// heading styles will be made global
		h1: {
			marginBottom: "24px",
			padding: "0 5%",
			fontSize: "36px",
			fontWeight: 900,
			letterSpacing: "3px",
			fontFamily: '"Barlow Condensed", serif',
			color: theme.white
		},

		h2: {
			marginBottom: "12px",
			color: theme.white,
			fontSize: "22px",
			fontWeight: 600,
			letterSpacing: "2px",
			fontFamily: '"Montserrat", sans-serif'
		},

		grid: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr 1fr",
			gap: "24px",
			padding: "0 5%",

			["@media (max-width: 1000px)"]: {
				gridTemplateColumns: "1fr",
				columnGap: "0"
			}
		},

		container: {
			padding: "32px",
			borderRadius: "10px",
			backgroundColor: colors.darker,
			color: colors.lighter,
			lineHeight: "200%",

			["& p"]: {
				fontSize: "18px",

				["&:not(:nth-child(1))"]: {
					marginTop: "24px"
				},

				["@media (max-width: 600px)"]: {
					fontSize: "14px"
				}
			},

			["& strong"]: {
				fontWeight: 600
			},

			["& a"]: {
				color: colors.lighter
			}
		}
	}
})
