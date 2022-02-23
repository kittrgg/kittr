import styled from "styled-components"

import SVG from "@Components/shared/SVG"
import colors from "@Colors"

interface Props {
	/** User's search term. */
	value: string
	/** onChange handler for the text input. */
	onChange: (...args: any) => any
	/** Clear the user's search term. Does not submit the form action unless done so explicitly in the function. */
	clearSearch: (...args: any) => any
	/** Should the browser offer up auto-completions? Defaults to "off". */
	autoComplete?: "off" | "on"
}

export const SearchInput = ({ value, onChange, clearSearch, autoComplete = "off" }: Props) => {
	return (
		<div style={{ position: "relative" }}>
			<Input
				type="text"
				name="channelSearch"
				placeholder="Search..."
				autoComplete={autoComplete}
				value={value as string}
				onChange={onChange}
				data-cy="search-input"
			/>
			{value.length > 0 && (
				<SVG.X
					data-cy="clear-search"
					width="12px"
					fill={colors.red}
					style={{
						padding: "12px",
						height: "20px",
						position: "absolute",
						right: "8px",
						top: "50%",
						transform: "translateY(-50%)",
						borderTopRightRadius: "12px",
						borderBottomRightRadius: "12px",
						cursor: "pointer"
					}}
					onClick={clearSearch}
				/>
			)}
		</div>
	)
}

export default SearchInput

// Styled Components

const Input = styled.input`
	display: block;
	width: 100%;
	padding: 12px 5%;
	border-radius: 12px;
	background-color: ${colors.darker};
	color: ${colors.white};
	font-size: 18px;
	letter-spacing: 2px;
	outline: none;

	&:focus {
		background-color: ${colors.white};
		color: ${colors.darker};
	}
`
