import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { header1 } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import FullScreen from "@Components/layouts/FullScreen"
import SVG from "@Components/shared/SVG"

interface Props {
	/** Title to show at the top of the modal. */
	title?: string | ReactNode
	/** Should the modal close if you click on the background dimmer? */
	backgroundClickToClose?: boolean
	/** An optional function to call when the user clicks the X or clicks the background to close it.  */
	onUserClose?: (...args: any) => any
	/** React children to use as the content of the modal. */
	children: ReactNode
	/** Styles to pass to the body of the modal. */
	style?: CSSProperties
}

/** Modal utility to be used throughout the app. Comes with a built-in background dimmer to automatically give the view depth. */
export const Modal = ({ title, backgroundClickToClose, onUserClose, children, style }: Props) => {
	const dispatch = useDispatch()

	return (
		<FullScreen
			style={{
				zIndex: 100,
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgba(29,29,31,.8)",
				cursor: backgroundClickToClose ? "pointer" : "default"
			}}
			onClick={() => {
				if (backgroundClickToClose) {
					onUserClose ? onUserClose() : dispatch(setModal({ type: "", data: {} }))
				}
			}}
		>
			<Body onClick={(e) => e.stopPropagation()} style={style}>
				<Xtainer data-cy="modal-x-close" onClick={onUserClose || (() => dispatch(setModal({ type: "", data: {} })))}>
					<SVG.X width="24px" fill={colors.light} />
				</Xtainer>
				<PositionHelper>
					<Title>{title}</Title>
					{children}
				</PositionHelper>
			</Body>
		</FullScreen>
	)
}

export default Modal

// Styled Components

const Title = styled.h2`
	margin-bottom: 36px;
	${header1};
	letter-spacing: 2px;
`

const Body = styled.div`
	position: relative;
	max-width: 90vw;
	max-height: 90vh;
	background-color: ${colors.middle};
	border-radius: 20px;
	overflow: hidden;
	cursor: default;
`

const PositionHelper = styled.div`
	width: 100%;
	max-height: 90vh;
	padding: 48px 76px;
	overflow-y: auto;

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

const Xtainer = styled.div`
	position: absolute;
	right: 24px;
	top: 12px;
	padding: 4px;
	background-color: ${colors.darker};
	border-radius: 20px;
	cursor: pointer;
`
