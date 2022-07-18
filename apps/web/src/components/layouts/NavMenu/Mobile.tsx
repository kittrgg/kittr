import { useState, ReactNode } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { header2 } from "@Styles/typography"
import Menu from "./MobilePane"
import SVG from "@Components/shared/SVG"
import LogoImageLink from "./LogoImageLink"

interface Props {
	/** Breakpoint as passed by down by navigation master component */
	breakpoint: number
	/** Optional back location as passed down by navigation master component */
	backFunction?: (...args: any) => any
	/** Center component for the banner style */
	middleComponent?: ReactNode
}

/** Mobile navigation menu. Only to be used as a child of the master <NavMenu /> component. */
const MobileNav = ({ breakpoint, backFunction, middleComponent }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
			<Container withBackground={!!backFunction} breakpoint={breakpoint}>
				{backFunction ? (
					<div onClick={backFunction} style={{ cursor: "pointer" }}>
						<SVG.Carat
							style={{
								width: "24px",
								marginRight: "16px",
								transform: "rotate(-90deg)"
							}}
						/>
					</div>
				) : (
					<LogoImageLink />
				)}
				{middleComponent && (
					<MidFlex>{typeof middleComponent === "string" ? <H2>{middleComponent}</H2> : middleComponent}</MidFlex>
				)}
				<Button data-cy="mobile-hamburger-icon" onClick={() => setIsOpen(true)}>
					<HamburgerImageContainer>
						<img src="/media/icons/burger.svg" alt="Kittr Logo" width={40} height={40} />
					</HamburgerImageContainer>
				</Button>
			</Container>
		</>
	)
}

export default MobileNav

// Styled Components

const Container = styled.div<{ withBackground: boolean; breakpoint?: number }>`
	display: none;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 5px 30px;
	background: ${(props) => (props.withBackground ? `linear-gradient(180deg, ${colors.lightest} 0%, rgba(29,29,31, .8) 100%)` : "transparent")};

	@media (max-width: ${(props) => props.breakpoint || 769}px) {
		display: flex;
	}
`

const HamburgerImageContainer = styled.div`
	width: 40px;
`

const Button = styled.button`
	appearance: none;
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
`

const MidFlex = styled.div`
	position: relative;
	flex: 1;
	text-align: center;
	overflow: hidden;
	mask-image: linear-gradient(to right, black 75%, transparent 100%);
`

const H2 = styled.h2`
	${header2};
	font-size: 14px;
	white-space: nowrap;
`
