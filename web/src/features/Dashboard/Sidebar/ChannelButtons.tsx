import { useEffect, useRef, MutableRefObject, Key } from "react"
import * as Styled from "./style"
import colors from "@Colors"
import { handleTutorialAction, setModal, setChannelView } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { useManagerRole } from "@Redux/slices/dashboard/selectors/useManagerRole"

import ProfileImage from "@Components/shared/ProfileImage"
import GameButton from "./GameButton"
import AddGameNotification from "./AddGameNotification"
import Icon from "../Icon"
import { useChannelData, useChannelView, useModal } from "@Redux/slices/dashboard/selectors"
import { useAllGames } from "@Hooks/api/useAllGames"

/** Buttons that will appear when a channel is opened */
const ChannelButtons = ({ ...props }) => {
	const dispatch = useDispatch()
	const modal = useModal()
	const ref = useRef() as MutableRefObject<HTMLButtonElement>
	const { view, gameId } = useChannelView()
	const {
		meta: { profileImage },
		games
	} = useChannelData()
	const role = useManagerRole()
	const { data } = useAllGames()

	/** tutorial ref data */
	useEffect(() => {
		if (modal.data?.page === 4 && ref?.current && role === "Owner") {
			dispatch(
				setModal({
					type: "Tutorial",
					data: {
						page: modal.data.page,
						ref: ref.current.getBoundingClientRect().top * 0.85
					}
				})
			)
		}
	}, [modal.data?.page, ref?.current, role])

	return (
		<>
			<hr style={{ width: "60%", borderColor: colors.light }} />
			<Styled.ButtonContainer isActive={view === "Channel Settings"}>
				<Styled.Button
					style={{ backgroundColor: "transparent" }}
					onClick={() => dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))}
				>
					<ProfileImage size="70px" imagePath={profileImage} alwaysRefresh />
				</Styled.Button>
			</Styled.ButtonContainer>

			{games &&
				data &&
				games.map((game) => (
					<GameButton
						key={data.find((allGame) => allGame._id === game.id)?.id}
						game={data.find((allGame) => allGame._id === game.id) as IGame}
						activeView={gameId === data.find((allGame) => allGame._id === game.id)?.id}
					/>
				))}

			{role === "Owner" && (
				<>
					<Styled.ButtonContainer isActive={false} style={{ marginBottom: "32px" }}>
						<Styled.Button
							ref={ref}
							onClick={() => {
								dispatch(
									handleTutorialAction({
										condition: modal.type === "Tutorial",
										trueState: {
											type: "Add Game",
											data: { isTutorial: true, page: 4, ref: modal.data?.ref }
										},
										falseState: { type: "Add Game", data: "" }
									})
								)
							}}
							style={{
								marginBottom: "64px",
								padding: "25px",
								position: modal.data?.page === 4 ? "relative" : undefined,
								zIndex: modal.data?.page === 4 ? 101 : undefined
							}}
							data-cy="sidebar-add-game"
						>
							<Icon src="/media/icons/plus.svg" alt="Add a Game" />
						</Styled.Button>
						{games.length === 0 && <AddGameNotification />}
					</Styled.ButtonContainer>
				</>
			)}
		</>
	)
}

export default ChannelButtons
