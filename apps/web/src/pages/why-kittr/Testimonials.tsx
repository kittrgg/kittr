import * as Styled from "./style"
import colors from "@Colors"
import styled from "styled-components"

const TESTIMONIALS = [
	{
		name: "JoeWo",
		role: "Player",
		quote: "WAIT THATS GAS"
	},
	{
		name: "TeePee",
		role: "Player",
		quote: "Yo, Blade, that site looks sick, though."
	},
	{
		name: "Wampus",
		role: "Mod",
		quote: "It's really easy to setup, love the UI you guys have implemented"
	},
	{
		name: "exzachtt",
		role: "Player",
		quote: "FIRE FIRE FIRE FIRE! THAT SITE IS FIRE!!!"
	},
	{
		name: "teejaySB",
		role: "Mod",
		quote: "can someone check the loadout link and tell me how sick that is"
	},
	{
		name: "Almxnd",
		role: "Player",
		quote: "Wait, hol' up. Tommey, are you on this? You gotta get on this."
	},
	{
		name: "GeeBigs",
		role: "Player",
		quote: "This site has been absolutely perfect for my community and I've received a handful of compliments on it."
	},
	{
		name: "CuddelzTV",
		role: "Viewer",
		quote: "damn thats a really dope loadout tracker"
	},
	{
		name: "DanH17_",
		role: "Mod",
		quote: "Holy **** that is amazing...yeah that is so good"
	}
]

const LastSection = () => (
	<section>
		<Styled.H2>TESTIMONIALS</Styled.H2>
		<Styled.P>STILL DON'TBELIEVE US? HERE'S WHAT THE COMMUNITY SAYS.</Styled.P>
		<Wrapper>
			<Scrolltainer>
				{TESTIMONIALS.map(({ name, role, quote }) => (
					<Item key={name}>
						<Name>{name}</Name>
						<Role>{role}</Role>
						<Quote>{quote}</Quote>
					</Item>
				))}
			</Scrolltainer>
		</Wrapper>
	</section>
)

export default LastSection

// Styled Components

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 40px;
	overflow: hidden;
`

const Scrolltainer = styled.div`
	display: flex;
	flex-direction: row;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`

const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	min-width: 275px;
	max-width: 275px;
	height: 200px;
	margin: 18px 10px;
	padding: 20px;
	background-color: ${colors.dark};
	border-radius: 20px;
	overflow: hidden;
`

const Name = styled.p`
	font-family: "Barlow Condensed", serif;
	font-size: 22px;
	font-weight: 600;
	letter-spacing: 1px;
`

const Role = styled.p`
	margin-top: 6px;
	font-style: italic;
	font-size: 14px;
	color: ${colors.lighter};
`

const Quote = styled.p`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	letter-spacing: 1px;
`
