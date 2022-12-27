import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { header2 } from "@Styles/typography"
import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react"
import styled from "styled-components"

interface IProvider {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface Props {
	/** Title text for the header of the accordion section. */
	title: string
	/** Children passed into the component. These children will be rendered when the accordion is opened up. */
	children: ReactNode
}

/** Handles the open/closed state for the accordion.
 *
 * This allows the interal state to be controlled from outside the component.
 */
export const { Provider, Consumer } = createContext<IProvider>({ isOpen: false, setIsOpen: () => null })

/** Accordion style "dropdown" component. */
export const Accordion = ({ title, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [headerIsHovered, setHeaderIsHovered] = useState<boolean>(false)

	return (
		<Provider value={{ isOpen, setIsOpen }}>
			<Container>
				<Header
					onClick={() => setIsOpen(!isOpen)}
					onMouseEnter={() => setHeaderIsHovered(true)}
					onMouseLeave={() => setHeaderIsHovered(false)}
				>
					{title}
					<SVG.Carat
						width="20px"
						style={{
							marginLeft: "40px",
							transform: isOpen ? "translateY(1px)" : "rotate(180deg) translateY(-2px)",
							opacity: headerIsHovered || isOpen ? 1 : 0,
							transition: ".2s"
						}}
					/>
				</Header>
				<Body isOpen={isOpen}>
					<Children>{children}</Children>
				</Body>
			</Container>
		</Provider>
	)
}

export default Accordion

// Styled Components

const Container = styled.section`
	position: relative;
`

const Header = styled.header`
	padding: 18px 32px;
	padding-left: "32px";
	border-radius: 24px;
	${header2};
	font-weight: 500;
	cursor: pointer;
	user-select: none;

	&:hover {
		background-color: ${colors.middle};
	}

	@media (max-width: 500px) {
		padding: 18px;
	}
`

const Body = styled.div<{ isOpen: boolean }>`
	height: ${(props) => (props.isOpen ? "auto" : "0")};
	margin: 24px 0 36px;
	padding: 0 48px;
	overflow: hidden;
	opacity: ${(props) => (props.isOpen ? 1 : 0)};
	transition: 0.2s;

	@media (max-width: 500px) {
		padding: 0 18px;
	}
`

const Children = styled.div``
