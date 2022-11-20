import colors from "@Colors"
import { header2 } from "@Styles/typography"
import styled from "styled-components"

interface Props {
	/** Possible values for the component. */
	values: Array<{
		/** Text for the button for this value. */
		text: string
		/** Optional value parameter. If omitted, the text field will be used. */
		value?: string | boolean
		/** When active, the background color for the given value. Optional.
		 * Defaults to colors.lighter.
		 */
		backgroundColor?: string
		/** Inactive text color for the given value. When this value is not selected, what color should it be?
		 * Optional. Defaults to white.
		 */
		textInactiveColor?: string
		/** Inactive text color for the given value. When this value is not selected, what color should it be?
		 * Optional. Defaults to white.
		 * */
		textActiveColor?: string
	}>
	/** The background body of the component's color.
	 * Defaults to colors.lightest.
	 */
	wrapperBackgroundColor?: string
	/** Current user selection. */
	activeValue: string | boolean
	/** Optional onClick handler to run on user's selection. */
	onClick: (...args: any) => any
	/** Cypress data attribute. */
	dataCy?: string
	/** Optional information labels that show above the buttons */
	infoLabels?: Array<JSX.Element | string>
}

/**  */
export const MultiButton = ({
	wrapperBackgroundColor = colors.lightest,
	values,
	activeValue,
	onClick,
	dataCy,
	infoLabels
}: Props) => (
	<>
		<InfoLabelWrapper>
			{infoLabels?.map((infoLabel, index) => (
				<InfoLabel key={index}>{infoLabel}</InfoLabel>
			))}
		</InfoLabelWrapper>
		<Wrapper backgroundColor={wrapperBackgroundColor} data-cy={dataCy}>
			{values.map((elem, index: number) => (
				<Button
					key={elem.text}
					active={elem.value ? activeValue === elem.value : activeValue === elem.text}
					backgroundColor={elem.backgroundColor || colors.lighter}
					textInactiveColor={elem.textInactiveColor || colors.white}
					textActiveColor={elem.textActiveColor || colors.white}
					numberOfValues={values.length}
					onClick={() => onClick(elem)}
					data-cy={`toggler-value-${index}`}
					data-active={elem.value ? activeValue === elem.value : activeValue === elem.text}
				>
					{elem.text}
				</Button>
			))}
		</Wrapper>
	</>
)

export default MultiButton

// Styled Components

const Wrapper = styled.div<{ backgroundColor: string }>`
	position: relative;
	height: 58px;
	padding: 4px;
	border-radius: 8px;
	background-color: ${(props) => props.backgroundColor};
	overflow: hidden;
`

const InfoLabelWrapper = styled.div`
	display: flex;
	text-align: center;
	color: ${colors.light};
`

const InfoLabel = styled.span`
	flex: 1;
`

const Button = styled.button<{
	numberOfValues: number
	backgroundColor: string
	textInactiveColor: string
	textActiveColor: string
	active: boolean
}>`
	appearance: none;
	width: ${(props) => `${100 / props.numberOfValues}%`};
	height: 100%;
	border: none;
	float: left;
	overflow: hidden;

	&:first-of-type {
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
	}

	&:last-of-type {
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
	}

	background-color: ${(props) => (props.active ? props.backgroundColor : "transparent")};
	color: ${(props) => (props.active ? props.textActiveColor : props.textInactiveColor)};
	${header2};
	font-size: 18px;
	cursor: pointer;
	transition: 0.2s;
	outline: none;
`
