import styled from "styled-components"

const Wrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Paragraph = styled.p`
	margin: 8px 64px;
	font-size: 24px;
	letter-spacing: 2px;
	text-align: center;
`

/** Comes into view when someone deletes a game. */
const DeletedGameNotification = ({ ...props }) => {
	return (
		<Wrapper>
			<Paragraph>Game deleted.</Paragraph>
			<Paragraph>Adios.</Paragraph>
			<Paragraph>Buh-bye.</Paragraph>
			<Paragraph>Sayonara.</Paragraph>
			<Paragraph>Arrivederci.</Paragraph>
			<Paragraph>Aloha.</Paragraph>
			<Paragraph>Au revoir.</Paragraph>
		</Wrapper>
	)
}

export default DeletedGameNotification
