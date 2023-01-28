import { trpc } from "@/lib/trpc"
import { Button, GameCard, Modal, Spinner } from "@Components/shared"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { handleTutorialAction, setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import styled from "styled-components"

/** The modal that adds a game to a channel. */
const AddGameModal = () => {
	const dispatch = useDispatch()
	const modal = useModal()
	const { refetch: refetchDashboard } = useDashboardChannel()
	const { channelId } = useSelector((state) => state.dashboard.activeView)
	const channelData = useChannelData()

	const { isLoading, data } = trpc.games.list.useQuery()

	const { mutate, isLoading: isMutating } = trpc.channels.games.add.useMutation({
		onSuccess: () => {
			dispatch(
				handleTutorialAction({
					condition: modal.data?.isTutorial,
					trueState: { type: "Tutorial", data: { page: 5, ref: modal.data?.ref } },
					falseState: { type: "", data: {} }
				})
			)
			refetchDashboard()
		},
		onError: () => {
			dispatch(setModal({ type: "Error Notification", data: "" }))
		}
	})

	const handleTutorial = () => {
		dispatch(
			handleTutorialAction({
				condition: modal.data?.isTutorial,
				trueState: { type: "Tutorial", data: { page: 4, ref: modal.data?.ref } },
				falseState: { type: "", data: {} }
			})
		)
	}

	const gamesToExclude = channelData.data?.games.map((game) => game.id) ?? []

	return (
		<Modal backgroundClickToClose={false} title="ADD GAME" onUserClose={handleTutorial}>
			{isLoading && <Spinner width="100%" height="50px" />}
			{isMutating && <Spinner width="100%" height="50px" />}
			<ButtonFlex>
				<Button
					design="transparent"
					text={isMutating ? "..." : "BACK"}
					disabled={isMutating}
					onClick={handleTutorial}
					style={{ marginBottom: "24px" }}
				/>
			</ButtonFlex>
			<Grid>
				{data &&
					!isMutating &&
					[...data]
						.filter((game) => !gamesToExclude.includes(game.id))
						.sort((game) => (game.active ? -1 : 1))
						.map((game) => {
							return (
								<GameCard
									key={game.id}
									{...game}
									noText
									onClick={() => {
										if (game.active) mutate({ gameId: game.id, channelId: channelId })
									}}
								/>
							)
						})}
			</Grid>
			<ButtonFlex>
				<Button
					design="transparent"
					text={isMutating ? "..." : "BACK"}
					disabled={isMutating}
					onClick={handleTutorial}
				/>
			</ButtonFlex>
		</Modal>
	)
}

export default AddGameModal

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 56px;
	margin: 0 56px 56px;
`

const ButtonFlex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 24px;
`
