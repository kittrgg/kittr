import { useState } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { Modal, SVG } from "@Components/shared"

const BuyHomeChannelBoostr = ({ ...props }) => {
	const [step, setStep] = useState(0)
	const [date, setDate] = useState(0)
	const [startTime, setStartTime] = useState(0)
	const [endTime, setEndTime] = useState(0)

	return (
		<Modal backgroundClickToClose>
			<div>
				<HorizFlex>
					<StepLabel active={step === 0}>Select Time Slot</StepLabel>
					<StepLabel active={step === 1}>Payment Info</StepLabel>
					<StepLabel active={step === 2}>Confirm & Pay</StepLabel>
				</HorizFlex>
				<HorizFlex style={{ marginTop: "12px" }}>
					<SVG.Line
						stroke={step >= 1 ? colors.white : colors.lightest}
						style={{
							position: "absolute",
							width: "initial",
							zIndex: "-1",
							left: "90px",
							right: "48%"
						}}
					/>
					<SVG.Line
						stroke={step === 2 ? colors.white : colors.lightest}
						style={{
							position: "absolute",
							width: "initial",
							zIndex: "-1",
							right: "60px",
							left: "52%"
						}}
					/>
					<SVG.Circle
						fill={step >= 0 ? colors.white : colors.lightest}
						style={{ width: "16px", height: "36px", marginLeft: "86px" }}
					/>
					<SVG.Circle fill={step >= 1 ? colors.white : colors.lightest} style={{ width: "16px", height: "36px" }} />
					<SVG.Circle
						fill={step >= 2 ? colors.white : colors.lightest}
						style={{ width: "16px", height: "36px", marginRight: "56px" }}
					/>
				</HorizFlex>
			</div>
		</Modal>
	)
}

export default BuyHomeChannelBoostr

// Styled Components

const HorizFlex = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 750px;
	z-index: 1;
`

const StepLabel = styled.p<{ active: boolean }>`
	${paragraph};
	color: ${(props) => (props.active ? colors.white : colors.lightest)};
`
