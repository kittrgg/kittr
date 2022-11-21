import * as Styled from "./style"
import colors from "@Colors"
import { updateChannelQuote } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import styled from "styled-components"

const ChannelQuote = () => {
	const dispatch = useDispatch()
	const { quote } = useActiveKit()

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>QUOTE</Styled.Header>
				<Styled.HeaderHelper>(Optional)</Styled.HeaderHelper>
			</Styled.HorizFlex>
			<Styled.ParagraphHelper>Add your tips or comments about this kit.</Styled.ParagraphHelper>
			<TextArea
				name="channelQuote"
				value={quote ?? ""}
				onChange={(e) => {
					if (e.target.value.length > 350) {
						return
					} else {
						dispatch(updateChannelQuote(e.target.value))
					}
				}}
			/>
		</Styled.Container>
	)
}

export default ChannelQuote

// Styled Components

const TextArea = styled.textarea`
	width: 100%;
	margin-top: 18px;
	padding: 28px;
	border-radius: 4px;
	background-color: ${colors.middle};
	color: ${colors.white};
	${paragraph};
	outline: none;
	resize: none;

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
