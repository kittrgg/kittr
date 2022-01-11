import { useState, useEffect } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { useSelector } from "@Redux/store"
import { useIsMounted } from "@Hooks/useIsMounted"
import { usePreviousValue } from "@Hooks/usePreviousValue"

const EditNotification = ({ ...props }) => {
	const isMounted = useIsMounted()
	const [active, setActive] = useState(false)
	const [initialRender, setInitialRender] = useState(true)
	// const channelData = useSelector((state) => state.dashboard.channelData)
	// const previousEditor = usePreviousValue(channelData.previousUpdater)

	return null

	// useEffect(() => {
	// 	if (previousEditor === channelData.previousUpdater) return

	// 	setActive(true)

	// 	setTimeout(() => {
	// 		if (isMounted()) {
	// 			setActive(false)
	// 			setInitialRender(false)
	// 		}
	// 	}, 1500)
	// }, [channelData, isMounted])

	// return (
	// 	<Container active={active && !initialRender}>
	// 		<p>{channelData.previousUpdater} just made an edit!</p>
	// 	</Container>
	// )
}

export default EditNotification

// Styled Component

const Container = styled.div<{ active: boolean }>`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	padding: 20px;
	border-radius: 20px;
	background-color: ${colors.darker};
	${header2};
	font-size: 14px;
	text-align: center;
	transition: 0.2s;
	top: ${(props) => (props.active ? "20px" : "-65px")};
	opacity: ${(props) => (props.active ? 1 : 0)};
`
