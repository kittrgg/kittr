import { Modal } from "@Components/shared"
import { header2 } from "@Styles/typography"
import styled from "styled-components"

/** Notify of any errors that happen. */
const ErrorNotification = () => {
	return (
		<Modal backgroundClickToClose title="UH OH. WE MESSED UP">
			<Paragraph>This error has been logged into our systems and we will investigate it as soon as possible.</Paragraph>
		</Modal>
	)
}

export default ErrorNotification

// Styled Components

const Paragraph = styled.p`
	margin: 0 auto;
	margin-bottom: 32px;
	${header2};
`
