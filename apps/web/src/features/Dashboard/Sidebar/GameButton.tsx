import { useState, useRef, MutableRefObject, useEffect } from "react"

import * as Styled from "./style"
import colors from "@Colors"
import { useDispatch } from "@Redux/store"
import { setChannelView, setModal, handleTutorialAction } from "@Redux/slices/dashboard"
import { useManagerRole, useModal } from "@Redux/slices/dashboard/selectors"
import SVG from "@Components/shared/SVG"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { Game } from "@kittr/prisma"

interface Props {
	/** The game for this button. */
	game: Game
	/** If the game is currently in view. */
	activeView: string | boolean
}

/** A button to open up a game that is on this channel's profile. */
const GameButton = ({ game, activeView }: Props) => {
	const dispatch = useDispatch()
	const modal = useModal()
	const ref = useRef() as MutableRefObject<HTMLButtonElement>
	const role = useManagerRole()
	const [isHovered, setIsHovered] = useState(false)
	/** tutorial ref data */
	useEffect(() => {
		if (modal.data?.page === 5 && ref?.current) {
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
	}, [modal.data?.page, ref?.current])

	return (
		<Styled.ButtonContainer
			style={{ zIndex: modal.type === "Tutorial" ? 101 : 100 }}
			key={game.id}
			isActive={activeView}
		>
			<Styled.Button
				ref={ref}
				onClick={() => {
					dispatch(
						handleTutorialAction({
							condition: modal.type === "Tutorial",
							trueState: {
								type: "Tutorial",
								data: { page: modal.data.page + 1 }
							},
							falseState: { type: "", data: {} }
						})
					)
					dispatch(setChannelView({ gameId: game.id, view: game.urlSafeName }))
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				data-cy={`${game.urlSafeName}-sidebar-button`}
			>
				<FirebaseStorageResolver
					noSpinner
					path={game.titleImageUrl}
					render={(img) => (
						<img src={img} alt={game.displayName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
					)}
				/>
			</Styled.Button>
			{role === "OWNER" && (
				<Styled.DeleteGameBubble
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={() =>
						dispatch(
							setModal({
								type: "Delete Game",
								data: { idToDelete: game.id }
							})
						)
					}
					isHovered={isHovered}
					data-cy={`${game.urlSafeName}-delete-sidebar-button`}
				>
					<SVG.X style={{ width: "100%", height: "100%" }} fill={colors.red} />
				</Styled.DeleteGameBubble>
			)}
		</Styled.ButtonContainer>
	)
}

export default GameButton
