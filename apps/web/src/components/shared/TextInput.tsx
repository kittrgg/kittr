import colors from "@Colors"
import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
	/** Input types for "text" based inputs */
	type: "text" | "password" | "email"
	/** HTMl5 name for the input. */
	name: string
	/** Text label for the input. */
	label: string | ReactNode
	/** Optionally move the label above the text input. */
	topLabel?: boolean
	/** Optionally remove the label from the text input. */
	noTextLabel?: boolean
	/** Placeholder for the input field. Optional. */
	placeholder?: string
	/** User's input. */
	value: string
	/** A subtext beneath the input field. */
	subline?: string
	/** A width for the element. Important for keeping the label at the same size as the input in certain situations. */
	width?: string
	/** React CSS Properties for the input. */
	inputStyles?: React.CSSProperties
	/** React CSS Properties for the label. */
	labelStyles?: React.CSSProperties
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
export const TextInput = ({
	type,
	name,
	label,
	topLabel,
	noTextLabel,
	placeholder,
	value,
	subline,
	width,
	inputStyles,
	labelStyles,
	sublineStyles,
	onChange,
	onFocus,
	onBlur
}: Props) => {
	if (topLabel) {
		return (
			<>
				<Label htmlFor={name} width={width} style={{ display: "block", marginTop: "48px", ...labelStyles }}>
					{!noTextLabel && typeof label === "string" ? label.toUpperCase() : label}
				</Label>
				<Input
					width={width}
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					style={{ marginLeft: "0", ...inputStyles }}
					autoComplete="off"
				/>
				{subline && <Subline style={sublineStyles}>{subline}</Subline>}
			</>
		)
	}

	return (
		<Label htmlFor={name} width={width} style={labelStyles}>
			{!noTextLabel && label}
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
		</Label>
	)
}

export default TextInput

// Styled Components

const Label = styled.label<{ width?: string }>`
	width: ${(props) => (props.width ? props.width : "initial")};
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 2px;
`

const Input = styled.input<{ width?: string }>`
	appearance: none;
	width: ${(props) => (props.width ? props.width : "initial")};
	margin-left: 24px;
	padding: 4px;
	border: none;
	border-radius: 0;
	border-bottom: ${`1px solid ${colors.lightest}`};
	background-color: transparent;
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
