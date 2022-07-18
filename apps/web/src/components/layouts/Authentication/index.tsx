import { ReactNode } from "react"
import styled from "styled-components"

import { header1 } from "@Styles/typography"
import colors from "@Colors"
import NavMenu from "@Components/layouts/NavMenu"
import BlockArt from "./BlockArt"

interface Props {
	/**
	 * @params
	 * title: Title for content/form.
	 *
	 * children: React children to render.
	 */
	title: string
	children: ReactNode
}

/** Layout used for authentication related pages. Signups, logins, etc. */
const Authentication = ({ title, children }: Props) => (
		<Wrapper>
			<BlockArt />
			<NavMenu />
			<Container>
				<FormTitle>{title}</FormTitle>
				{children}
			</Container>
		</Wrapper>
	)

export default Authentication

// Styled Components

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	height: fit-content;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(99, 99, 99, 1) 50%, rgba(18, 18, 18, 1) 100%);
`

const Container = styled.div`
	width: 65%;
	margin-top: 10%;
	margin-bottom: 5%;
	padding: 48px 78px;
	border-radius: 20px;
	background-color: ${colors.dark};
	z-index: 100;
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

	@media (max-width: 1050px) {
		max-height: 1050px;
		background-color: transparent;
		height: 98%;
		padding: 30px 20px;
		background-color: ${colors.dark};
		margin-top: 100px;
		width: 100%;
	}
`

const FormTitle = styled.h1`
	margin-bottom: 52px;
	padding-bottom: 10px;
	${header1};

	@media (max-width: 1050px) {
		margin-bottom: 0;
		text-align: center;
	}
`
