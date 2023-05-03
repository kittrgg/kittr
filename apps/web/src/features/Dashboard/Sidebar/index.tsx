import SVG from "@Components/shared/SVG"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { handleTutorialAction, setActiveView } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import colors from "@Styles/colors"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import SupportModal from "../modals/Support"
import DeleteGameModal from "../modals/DeleteGame"
import AddGameModal from "../modals/AddGame"
import * as Styled from "./style"
import ChannelButtons from "./ChannelButtons"

/** Dashboard sidebar */
function Sidebar({ ...props }) {
	const { height } = useViewportDimensions()
	const modal = useModal()
	const { data } = useChannelData()
	const activeView = useSelector((state) => state.dashboard.activeView.view)
	const dispatch = useDispatch()

	return (
		<>
			{modal.type === "Add Game" && <AddGameModal />}
			{modal.type === "Delete Game" && <DeleteGameModal />}
			{modal.type === "Help" && <SupportModal />}
			<Styled.Container height={height }>
				<div style={{ marginBottom: "10px" }}>
					<Styled.ButtonContainer isActive={activeView === "not applicable"}>
						<Link
							href={Routes.ROOT}
							style={{
								position: "absolute",
								inset: "5px",
								cursor: "pointer"
							}}
						>
							<img alt="kittr logo" src="/media/logo-no-text-square-beta.svg" style={{ width: "60%" }} />
						</Link>
					</Styled.ButtonContainer>
				</div>

				<Styled.ButtonContainer isActive={activeView === "Channel List"}>
					<Styled.Button
						data-cy="channel-list-button"
						onClick={() => dispatch(setActiveView({ channelId: "", view: "Channel List" }))}
						style={{ padding: "20px" }}
					>
						<SVG.List />
					</Styled.Button>
				</Styled.ButtonContainer>

				<Styled.ButtonContainer isActive={activeView === "Profile Settings"}>
					<Styled.Button
						data-cy="user-settings-button"
						onClick={() =>
							dispatch(
								setActiveView({
									channelId: "",
									view: "Profile Settings"
								})
							)
						}
						style={{ padding: "20px" }}
					>
						<SVG.CogWheel />
					</Styled.Button>
				</Styled.ButtonContainer>

				{data?.id ? <ChannelButtons /> : null}

				<Styled.SupportButton
					onClick={() => {
						dispatch(
							handleTutorialAction({
								condition: modal.type === "Tutorial",
								trueState: { type: "Help", data: { isTutorial: true, page: 7 } },
								falseState: { type: "Help", data: {} }
							})
						)
					}}
					style={
						modal.data?.page === 7
							? {
									position: "relative",
									zIndex: modal.data?.isTutorial ? undefined : 101,
									backgroundColor: colors.light,
									borderRadius: "10px"
							  }
							: undefined
					}
				>
					<SVG.QuestionMark style={{ marginRight: "12px" }} width="24px" /> Help
				</Styled.SupportButton>
			</Styled.Container>
		</>
	)
}

export default Sidebar
