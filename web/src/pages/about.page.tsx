import colors from "@Colors"
import PageWrapper from "@Components/layouts/PageWrapper"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { header1, header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

const About = ({ ...props }) => {
	const { width } = useViewportDimensions()

	return (
		<PageWrapper title="About Us | kittr" description="Learn about the two of us that make kittr.">
			<H1>ABOUT</H1>
			<Grid>
				<Container style={{ gridColumn: "span 3" }}>
					<H2>OUR STORY</H2>
					<p>
						One day, our founder, Anthony, was watching some Warzone channels on Twitch. He used{" "}
						<strong>an !amax command</strong> to try to find out about a channeler's CR-56 AMAX setup (classic 2020). In
						most of the channels he watched, though, when viewers asked for a channeler’s kits in chat, they were given
						the link to...an ugly Google Sheet that was hard to read and interact with. Let it be known: Anthony is a
						web developer. As he struggled to learn about this AMAX, all he could think to himself was "Is there not a
						better way to do this?" The idea for kittr was born.
					</p>
					<p>
						Anthony quickly enlisted the help of his sister, a then-budding web designer. She was just learning the
						craft at the time - but Anthony promoted her to the big leagues right then and there. As it turns out Ashley
						is a complete all-star designer so she made all of the beautiful design for the website that you see.
					</p>
					<p>
						Today, kittr is the <strong>kit sharing solution</strong> that video game channelers have been waiting for.
						We hope you like it as much as we do.
					</p>
				</Container>
				<Container style={{ gridColumn: (width as number) > 1000 ? "span 2" : "1 / span 1" }}>
					<H2>WHAT WE DO</H2>
					<p>
						kittr is the place for channelers to{" "}
						<strong>easily share kits with their communities in a really nice looking way.</strong> We took it upon
						ourselves to enhance the Twitch experience for viewers, mods, and channelers alike. By providing an
						easy-to-use dashboard for channelers and moderators to create and edit kits, everyone wins!
					</p>
				</Container>
				<Container style={{ gridColumn: (width as number) > 1000 ? "span 1" : "1 / span 1" }}>
					<H2>WHO WE SERVE</H2>
					<p>
						Twitch <strong>channelers</strong>, <strong>moderators</strong>, and <strong>viewers</strong> all love using
						kittr because it looks great and is easy to use. But don't take our word for it. Check out the channels of
						the channels on <Link href={Routes.CHANNEL.LIST}>our channels</Link> and watch kittr in action. We think
						you'll be convinced.
					</p>
				</Container>
				<Container style={{ gridColumn: "span 3" }}>
					<H2>OUR MISSION</H2>
					<p>
						We strive to create a <strong>better channeling experience</strong> for Twitch channelers, moderators, and
						viewers alike. Before kittr, there wasn’t a great way for channelers to share their kits with viewers. It’s
						2021 - Google Sheets just won’t cut it. But don’t worry, we here at kittr have got your back.
					</p>
				</Container>
				<Container style={{ gridColumn: "span 3" }}>
					<H2>CONTACT US</H2>
					<p>
						If you have any questions, try visiting{" "}
						<Link href={Routes.FAQ}>
							<a>our FAQ page</a>
						</Link>
						. If you don't find the answer you are looking for there, head over or{" "}
						<Link href={Routes.CONTACT}>our contact page</Link>.
					</p>
				</Container>
			</Grid>
		</PageWrapper>
	)
}

export default About

// Styled Components

const H1 = styled.h1`
	margin-bottom: 24px;
	padding: 0 5%;
	${header1};
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
	padding: 0 5%;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		column-gap: 0;
	}
`

const Container = styled.div`
	padding: 32px;
	border-radius: 10px;
	background-color: ${colors.darker};
	color: ${colors.lighter};
	line-height: 200%;

	p {
		font-size: 18px;

		&:not(:nth-child(1)) {
			margin-top: 24px;
		}

		@media (max-width: 600px) {
			font-size: 14px;
		}
	}

	strong {
		font-weight: 600;
	}

	a {
		color: ${colors.lighter};
	}
`

const H2 = styled.h2`
	margin-bottom: 12px;
	color: ${colors.white};
	${header2};
`
