import styled from "styled-components"
import colors from "@Colors"

interface Props {
	/** Input types for "text" based inputs */
	type: "text" | "password" | "email" | "number"
	/** HTML5 name for the input. */
	name: string
	/** Placeholder for the input field. Optional. */
	placeholder?: string
	/** User's input. */
	value: string | number
	/** A subtext beneath the input field. */
	subline?: string
	/** A width for the element. Important for keeping the label at the same size as the input in certain situations. */
	width?: string
	/** React CSS Properties for the input. */
	inputStyles?: React.CSSProperties
	/** React CSS Properties for the subline. */
	sublineStyles?: React.CSSProperties
	/** onChange handler for the input. */
	onChange: (...args: any) => any
	/** Optional onFocus handler for the input. */
	onFocus?: (...args: any) => any
	/** Optional onBlur handler for the input. */
	onBlur?: (...args: any) => any
}

/** Utility text input component. */
export const TextInputBox = ({
	type,
	name,
	placeholder,
	value,
	subline,
	width,
	inputStyles,
	sublineStyles,
	onChange,
	onFocus,
	onBlur
}: Props) => {
	return (
		<>
			<Input
				width={width}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				style={inputStyles}
				autoComplete="off"
			/>
			{subline && <Subline style={sublineStyles}>{subline}</Subline>}
		</>
	)
}

export default TextInputBox

// Styled Components

const Input = styled.input<{ width?: string }>`
	appearance: none;
	display: block;
	width: ${(props) => (props.width ? props.width : "initial")};
	margin-left: 24px;
	padding: 18px 22px;
	border: none;
	border-radius: 20px;
	background-color: ${colors.light};
	color: ${colors.white};
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 4px;
	outline: none;
	transition: 0.2s;

	&:focus {
		border-bottom-color: ${colors.white};
	}
`

const Subline = styled.p`
	padding-top: 4px;
	color: ${colors.white};
	font-size: 14px;
	letter-spacing: 1px;
`
