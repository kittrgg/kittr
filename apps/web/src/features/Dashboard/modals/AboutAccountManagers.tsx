import styled from "styled-components"

import colors from "@Colors"
import { paragraph } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import { useManagerRole } from "@Redux/slices/dashboard/selectors/"
import { Modal, Button, SVG } from "@Components/shared"

const CENTER_SVG = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: 'translate("-50%, -50%")'
}

const CheckMark = () => (
	<td>
		<SVG.CheckMark width="20px" stroke={colors.green} style={CENTER_SVG} />
	</td>
)
const X = () => (
	<td>
		<SVG.X width="20px" fill={colors.red} style={CENTER_SVG} />
	</td>
)

/** Information about which account managers have which abilities. */
const AboutAccountManagers = () => {
	const dispatch = useDispatch()
	const role = useManagerRole()

	return (
		<Modal backgroundClickToClose title="ABOUT ACCOUNT MANAGERS">
			<Wrapper>
				<p style={{ marginBottom: "32px" }}>You can invite people you know to help manage your kittr account.</p>
				<p style={{ marginBottom: "32px" }}>There are three types of managers:</p>
			</Wrapper>

			<Table>
				<thead>
					<tr>
						<Th></Th>
						<Th>Owner{role === "OWNER" ? " (You)" : ""}</Th>
						<Th>Administrators{role === "ADMIN" ? " (You)" : ""}</Th>
						<Th>Editors{role === "EDITOR" ? " (You)" : ""}</Th>
					</tr>
				</thead>
				<TBody>
					<tr>
						<td>Access channel account settings</td>
						<CheckMark />
						<CheckMark />
						<X />
					</tr>
					<tr>
						<td>Assign new channel owner</td>
						<CheckMark />
						<X />
						<X />
					</tr>
					<tr>
						<td>Add & delete games</td>
						<CheckMark />
						<X />
						<X />
					</tr>
					<tr>
						<td>Demote & delete administrators</td>
						<CheckMark />
						<X />
						<X />
					</tr>
					<tr>
						<td>Add, delete, & promote editors</td>
						<CheckMark />
						<CheckMark />
						<td>
							<SVG.X width="20px" fill={colors.red} style={CENTER_SVG} />
						</td>
					</tr>

					<tr>
						<td>Add, edit, & delete kits</td>
						<CheckMark />
						<CheckMark />
						<CheckMark />
					</tr>
					<tr>
						<td>Use the Bot Command Exporter</td>
						<CheckMark />
						<CheckMark />
						<CheckMark />
					</tr>
				</TBody>
			</Table>

			<Button
				design="transparent"
				text="Close"
				onClick={() => dispatch(setModal({ type: "", data: {} }))}
				style={{ margin: "32px auto 0" }}
			/>
		</Modal>
	)
}

export default AboutAccountManagers

// Styled Components

const Wrapper = styled.div`
	${paragraph};
`

const Table = styled.table`
	width: 100%;
	letter-spacing: 2px;
`

const Th = styled.th`
	width: 25%;
`

const TBody = styled.tbody`
	td {
		position: relative;
		padding: 20px;
	}
`
