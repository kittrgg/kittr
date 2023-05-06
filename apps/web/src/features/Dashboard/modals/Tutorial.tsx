import colors from "@Colors"
import FullScreen from "@Components/layouts/FullScreen"
import { Modal, Button } from "@Components/shared"
import { handleTutorialAction } from "@Redux/slices/dashboard"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph, header2 } from "@Styles/typography"
import { useState, useEffect } from "react"
import styled from "styled-components"

const PAGE_CONTENT = [
	{
		title: "Welcome to kittr",
		header: "HI, WE'RE HAPPY YOU'RE HERE",
		text: "kittr makes it easy to create, edit, and share your kits with your community."
	},
	{
		header: "CLICK HERE TO START A NEW CHANNEL ACCOUNT."
	},
	{
		header: "CLICK ON YOUR NEWLY CREATED CHANNEL."
	},
	{
		header: "ADD A GAME."
	},
	{
		header: "CLICK ON NEWLY ADDED GAME."
	},
	{
		header: "ADD A KIT."
	},
	{
		header: "NEED SUPPORT? CLICK HELP. \n\nTHAT'S ALL THERE IS TO IT!"
	}
]

function Tutorial() {
	const dispatch = useDispatch()
	const { data } = useModal()
	const { page, ref } = data
	const [refData, setRefData] = useState(0)

	const eachPage = PAGE_CONTENT[page - 1]

	// Set ref data to handle top in modal.
	useEffect(() => {
		if (ref) {
			setRefData(ref)
		}
	}, [ref, refData])

	const isStep = (currentStep: number) => currentStep === page

	const tutorialModalStyle: any = () => {
		return {
			left: (isStep(4) && "200px") || (isStep(5) && "200px") || (isStep(6) && "70px"),
			top: !isStep(6) ? refData : "",
			position: !isStep(6) && !isStep(1) ? "absolute" : "",
			textAlign: isStep(7) ? "center" : "",
			whiteSpace: isStep(7) ? "pre-wrap" : ""
		}
	}

	if (isStep(4) && !ref)
		return (
			<FullScreen
				style={{
					zIndex: 100,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(29,29,31,.8)",
					cursor: "default"
				}}
			/>
		)

	return (
		<Modal
			backgroundClickToClose={false}
			style={{
				border: "1px solid white",
				...tutorialModalStyle()
			}}
			title={eachPage.title}
		>
			<Pages>
				{page}/{PAGE_CONTENT.length}
			</Pages>
			<Header>{eachPage.header}</Header>
			<Text>{eachPage.text}</Text>
			<HStack>
				{isStep(1) && (
					<Button
						dataCy="skip-tour"
						design="transparent"
						onClick={() => {
							dispatch(
								handleTutorialAction({
									condition: isStep(1),
									trueState: { type: "", data: {} },
									falseState: {
										type: "Tutorial",
										data: { page: page - 1 }
									}
								})
							)
						}}
						style={{ width: "250px", borderColor: "transparent" }}
						text={!isStep(1) ? "BACK" : "SKIP TOUR"}
					/>
				)}

				{isStep(1) || isStep(7) ? (
					<Button
						dataCy="next"
						design="white"
						onClick={() => {
							dispatch(
								handleTutorialAction({
									condition: !isStep(7),
									trueState: {
										type: "Tutorial",
										data: { page: page + 1 }
									},
									falseState: { type: "", data: {} }
								})
							)
						}}
						style={{ minWidth: "250px" }}
						text={!isStep(7) ? "NEXT" : "LET'S GET KITTD"}
					/>
				) : null}
			</HStack>
		</Modal>
	)
}

export default Tutorial

// Styled Components

const Header = styled.h2`
	margin-top: 32px;
	${header2};
`

const HStack = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	column-gap: 30px;
`

const Text = styled.p`
	margin-top: 32px;
	color: ${colors.lighter};
	${paragraph};
	text-align: left;
`

const Pages = styled.p`
	display: flex;
	position: absolute;
	top: 15px;
	right: 80px;
	color: ${colors.lighter};
	justify-content: center;
	${paragraph};
`
