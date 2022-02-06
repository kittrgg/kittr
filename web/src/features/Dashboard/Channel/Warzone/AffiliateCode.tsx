import colors from "@Colors"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { getToken } from "@Services/firebase/auth/getToken"
import { header2 } from "@Styles/typography"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import fetch from "@Fetch"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"

const CreatorCode = ({ ...props }) => {
	const dispatch = useDispatch()
	const { gameId: activeGame } = useChannelView()
	const { _id: channelId, games } = useChannelData()
	const [code, setCode] = useState(games.find((game) => game.id === activeGame)?.code || "")
	const [isEditing, setIsEditing] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const { mutate, error } = useDashboardMutator(async () => {
		const result = await fetch.put<any>({
			url: `/api/channel/meta/code`,
			headers: { authorization: `Bearer: ${await getToken()}` },
			body: { code, channelId, gameId: games.find((game) => game.id === activeGame)?.id }
		})

		if (result) {
			setIsEditing(false)
		}
	})

	useEffect(() => {
		if (isEditing && inputRef.current) {
			inputRef.current.focus()
		}
	}, [isEditing])

	if (error) {
		dispatch(setModal({ type: "Error Notification", data: {} }))
	}

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
	color: ${colors.lighter};
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
