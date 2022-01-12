import colors from "@Colors"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { getToken } from "@Services/firebase/auth/getToken"
import { header2 } from "@Styles/typography"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const CreatorCode = ({ ...props }) => {
	const { gameId: activeGame } = useChannelView()
	const { _id: channelId, games } = useChannelData()
	const [code, setCode] = useState(games.find((game) => game.id === activeGame)?.code || "")
	const [isEditing, setIsEditing] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const { mutate } = useDashboardMutator(async () => {
		fetch(`/api/channel/meta/code`, {
			method: "PUT",
			headers: {
				authorization: `Bearer: ${await getToken()}`
			},
			body: JSON.stringify({
				code,
				channelId,
				gameId: games.find((game) => game.id === activeGame)?.id
			})
		})
		setIsEditing(false)
	})

	useEffect(() => {
		if (isEditing && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isEditing])

	return (
		<Code>
			<span>CREATOR CODE - </span>
			{!isEditing && <span>{code} </span>}
			{isEditing && (
				<Input
					ref={inputRef}
					value={code}
					onChange={(e) => setCode(e.target.value)}
					onKeyDown={(e) => {
						if (e.key == "Enter" && inputRef.current) {
							return inputRef.current.blur()
						}
					}}
					onBlur={mutate}
					data-cy="creator-code-input"
				/>
			)}
			<EditButton onClick={() => setIsEditing(true)} data-cy="edit-creator-code">
				<img src="/media/icons/pencil.svg" alt="Edit creator code." width="20px" height="20px" />
			</EditButton>
		</Code>
	)
}

export default CreatorCode

// Styled Components

const Code = styled.div`
	color: ${colors.lightest};
	${header2};
	letter-spacing: 1px;
`

const EditButton = styled.button`
	appearance: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
`

const Input = styled.input`
	padding: 12px 24px;
	border-radius: 20px;
	background-color: ${colors.lightest};
	color: ${colors.white};
	outline: none;
`
