import { Button, GameCard, Modal, Spinner } from "@Components/shared"
import { NextClientEndpointError } from "@kittr/types/types"
import { Game } from "@kittr/prisma"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useAllGames } from "@Hooks/api/useAllGames"
import { handleTutorialAction, setModal } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import styled from "styled-components"
import fetch from "@Fetch"

/** The modal that adds a game to a channel. */
const AddGameModal = ({ ...props }) => {
	const dispatch = useDispatch()
	const modal = useModal()
	const { channelId } = useSelector((state) => state.dashboard.activeView)
	const channelData = useChannelData()
	const { isLoading, data } = useAllGames()

	const { mutate, isLoading: isMutating } = useDashboardMutator<void, NextClientEndpointError, Game>(async (game) => {
		try {
			const result = await fetch.post({
				url: `/api/channel/game/add`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { gameId: game.id, channelId }
			})

			if (result) {
				dispatch(
					handleTutorialAction({
						condition: modal.data?.isTutorial,
						trueState: { type: "Tutorial", data: { page: 5, ref: modal.data?.ref } },
						falseState: { type: "", data: {} }
					})
				)
			}
		} catch (err) {
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
					data
						.filter((game) => !gamesToExclude.includes(game.id))
						.map((game) => {
							return (
								<GameCard
									key={game.id}
									{...game}
									noText
									onClick={() => {
										if (game.active) mutate(game)
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
