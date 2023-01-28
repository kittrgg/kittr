import colors from "@Colors"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { trpc } from "@/lib/trpc"
import { header2 } from "@Styles/typography"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const CreatorCode = () => {
	const dispatch = useDispatch()
	const { gameId: activeGame } = useChannelView()
	const { data, refetch: refetchDashboard } = useChannelData()
	const affiliateCode = data?.gameCreatorCodes?.find((code) => code.gameId === activeGame)
	const [code, setCode] = useState(affiliateCode?.code || "")
	const [isEditing, setIsEditing] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const { mutate } = trpc.channels.profile["creator-codes"].upsert.useMutation({
		onSuccess: () => {
			setIsEditing(false)
			refetchDashboard()
		},
		onError: () => {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
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
					onBlur={async () => {
						mutate({
							code: { id: affiliateCode?.id, code, channelId: data?.id!, gameId: activeGame }
						})
					}}
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
