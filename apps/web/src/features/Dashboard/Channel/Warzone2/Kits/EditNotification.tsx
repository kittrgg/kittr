//Import { useState,  } from "react"
// Import styled from "styled-components"

// Import colors from "@Colors"
// Import { header2 } from "@Styles/typography"
// Import { useSelector } from "@Redux/store"
//Import { useIsMounted } from "@Hooks/useIsMounted"
// Import { usePreviousValue } from "@Hooks/usePreviousValue"

function EditNotification({ ...props }) {
	//	Const isMounted = useIsMounted()
	//	Const [active, setActive] = useState(false)
	//	Const [initialRender, setInitialRender] = useState(true)
	// Const channelData = useSelector((state) => state.dashboard.channelData)
	// Const previousEditor = usePreviousValue(channelData.previousUpdater)

	return null;

	// UseEffect(() => {
	// 	If (previousEditor === channelData.previousUpdater) return

	// 	SetActive(true)

	// 	SetTimeout(() => {
	// 		If (isMounted()) {
	// 			SetActive(false)
	// 			SetInitialRender(false)
	// 		}
	// 	}, 1500)
	// }, [channelData, isMounted])

	// Return (
	// 	<Container active={active && !initialRender}>
	// 		<p>{channelData.previousUpdater} just made an edit!</p>
	// 	</Container>
	// )
}

export default EditNotification;

// Styled Component
//
// Const Container = styled.div<{ active: boolean }>`
//	Position: fixed;
//	Left: 50%;
//	Transform: translateX(-50%);
//	Padding: 20px;
//	Border-radius: 20px;
//	Background-color: ${colors.darker};
//	${header2};
//	Font-size: 14px;
//	Text-align: center;
//	Transition: 0.2s;
//	Top: ${(props) => (props.active ? "20px" : "-65px")};
//	Opacity: ${(props) => (props.active ? 1 : 0)};
//`
