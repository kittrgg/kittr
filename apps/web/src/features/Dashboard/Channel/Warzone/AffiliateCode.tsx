import colors from "@Colors"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useChannelView } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { header2 } from "@Styles/typography"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { trpc } from "@/lib/trpc"

function CreatorCode() {
	const dispatch = useDispatch()
	const { gameId: activeGame } = useChannelView()
	const { refetch: refetchDashboard } = useDashboardChannel()
	const { data } = useChannelData()
	const affiliateCode = data?.gameCreatorCodes.find((code) => code.gameId === activeGame)
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
			{isEditing ? (
				<Input
					data-cy="creator-code-input"
					onBlur={async () => {
						mutate({
							// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
							code: { id: affiliateCode?.id, code, channelId: data?.id!, gameId: activeGame }
						})
					}}
					onChange={(e) => setCode(e.target.value)}
					onKeyDown={(e) => {
						if (e.key == "Enter" && inputRef.current) {
							return inputRef.current.blur()
						}
					}}
					ref={inputRef}
					value={code}
				/>
			) : null}
			<EditButton data-cy="edit-creator-code" onClick={() => setIsEditing(true)}>
				<img alt="Edit creator code." height="20px" src="/media/icons/pencil.svg" width="20px" />
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
