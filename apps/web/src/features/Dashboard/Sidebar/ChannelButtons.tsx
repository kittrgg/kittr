import colors from "@Colors"
import ProfileImage from "@Components/shared/ProfileImage"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { handleTutorialAction, setChannelView, setModal } from "@Redux/slices/dashboard"
import { useChannelView, useModal } from "@Redux/slices/dashboard/selectors"
import { useManagerRole } from "@Redux/slices/dashboard/selectors/useManagerRole"
import { useDispatch } from "@Redux/store"
import type { MutableRefObject} from "react";
import { useEffect, useRef } from "react"
import Icon from "../Icon"
import * as Styled from "./style"
import GameButton from "./GameButton"
import AddGameNotification from "./AddGameNotification"

/** Buttons that will appear when a channel is opened */
function ChannelButtons() {
	const dispatch = useDispatch()
	const modal = useModal()
	const ref = useRef() as MutableRefObject<HTMLButtonElement>
	const { view, gameId } = useChannelView()
	const { data: channelData } = useDashboardChannel()
	const role = useManagerRole()

	/** Tutorial ref data */
	useEffect(() => {
		if (modal.data?.page === 4 && ref.current && role === "OWNER") {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modal.data?.page, ref.current, role])

	const isOwnerOrAdmin = role === "ADMIN" || role === "OWNER"

	return (
		<>
			<hr style={{ width: "60%", borderColor: colors.light }} />
			<Styled.ButtonContainer isActive={view === "Channel Settings"}>
				<Styled.Button
					onClick={() => dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))}
					style={{ backgroundColor: "transparent" }}
				>
					<ProfileImage
						alwaysRefresh
						hasProfileImage={Boolean(channelData?.profile?.hasProfileImage)}
						imagePath={channelData?.profile?.hasProfileImage ? channelData.id : undefined}
						size="70px"
					/>
				</Styled.Button>
			</Styled.ButtonContainer>

			{channelData?.games.map((game) => {
				return <GameButton activeView={gameId === game.id} game={game} key={game.id} />
			})}

			{isOwnerOrAdmin ? <Styled.ButtonContainer isActive={false} style={{ marginBottom: "32px" }}>
						<Styled.Button
							data-cy="sidebar-add-game"
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
							ref={ref}
							style={{
								marginBottom: "64px",
								padding: "25px",
								position: modal.data?.page === 4 ? "relative" : undefined,
								zIndex: modal.data?.page === 4 ? 101 : undefined
							}}
						>
							<Icon alt="Add a Game" src="/media/icons/plus.svg" />
						</Styled.Button>
						{channelData?.games.length === 0 && <AddGameNotification />}
					</Styled.ButtonContainer> : null}
		</>
	)
}

export default ChannelButtons
