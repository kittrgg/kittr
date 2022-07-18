import styled, { keyframes } from "styled-components"
import colors from "@Colors"

interface Props {
	/** Width of the spinner's container. Defaults to 100vw.
	 *
	 * The actual size of the spinner will always be a square. It's dimensions will be defined by whichever computed value for width/height is smaller.
	 */
	width?: string
	/** Height of the spinner's container. Defaults to 50px.
	 *
	 * The actual size of the spinner will always be a square. It's dimensions will be defined by whichever computed value for width/height is smaller.
	 */
	height?: string
	/** The color of the circle outline that the arc traces through. Defaults to colors.middle */
	circleColor?: string
	/** The color of the path that animates through the circle outline. Defaults to colors.white */
	pathColor?: string
	/** Styles to be applied to the spinner's container. */
	style?: any
	/** Cypress testing attribute */
	dataCy?: string
}

/** Loading spinner for when data fetching is occurring. */
export const Spinner = ({
	width = "100%",
	height = "50px",
	circleColor = colors.middle,
	pathColor = colors.white,
	style,
	dataCy
}: Props) => (
		<div
			style={{
				position: "relative",
				width,
				height,
				...style
			}}
			data-cy={dataCy}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden"
				}}
			>
				<svg
					width="100%"
					height="100%"
					style={{
						maxHeight: height,
						transform: `rotate(${Math.floor(Math.random() * (360 - 0 * 1) + 0)}deg)`
					}}
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="16" cy="16" r="15" stroke={circleColor} strokeWidth="2" />
					<Path
						d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1"
						stroke={pathColor}
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</div>
		</div>
	)

export default Spinner

// Styled Components

const infiniteSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Path = styled.path<{ spinnerSize?: string }>`
	position: relative;
	width: ${(props) => props.spinnerSize || "25%"};
	height: ${(props) => props.spinnerSize || "25%"};
	transform-origin: center center;
	animation: ${infiniteSpin} 5s linear infinite;
`
