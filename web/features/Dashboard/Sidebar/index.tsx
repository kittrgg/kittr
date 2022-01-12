import SVG from "@Components/shared/SVG"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { handleTutorialAction, setActiveView } from "@Redux/slices/dashboard"
import { useChannelData, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch, useSelector } from "@Redux/store"
import colors from "@Styles/colors"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import AddGameModal from "../modals/AddGame"
import DeleteGameModal from "../modals/DeleteGame"
import SupportModal from "../modals/Support"
import ChannelButtons from "./ChannelButtons"
import * as Styled from "./style"

/** Dashboard sidebar */
const Sidebar = ({ ...props }) => {
	const { height } = useViewportDimensions()
	const modal = useModal()
	const channelData = useChannelData()
	const activeView = useSelector((state) => state.dashboard.activeView.view)
	const dispatch = useDispatch()

	return (
		<>
			{modal.type === "Add Game" && <AddGameModal />}
			{modal.type === "Delete Game" && <DeleteGameModal />}
			{modal.type === "Help" && <SupportModal />}
			<Styled.Container height={height as number}>
				<div style={{ marginBottom: "10px" }}>
					<Styled.ButtonContainer isActive={activeView === "not applicable"}>
						<Link href={Routes.ROOT}>
							<a
								style={{
									position: "absolute",
									inset: "5px",
									cursor: "pointer"
								}}
							>
								<img src="/media/logo-no-text-square-beta.svg" alt="kittr logo" style={{ width: "60%" }} />
							</a>
						</Link>
					</Styled.ButtonContainer>
				</div>

				<Styled.ButtonContainer isActive={activeView === "Channel List"}>
					<Styled.Button
						onClick={() => dispatch(setActiveView({ channelId: "", view: "Channel List" }))}
						style={{ padding: "20px" }}
						data-cy="channel-list-button"
					>
						<SVG.List />
					</Styled.Button>
				</Styled.ButtonContainer>

				<Styled.ButtonContainer isActive={activeView === "Profile Settings"}>
					<Styled.Button
						onClick={() =>
							dispatch(
								setActiveView({
									channelId: "",
									view: "Profile Settings"
								})
							)
						}
						style={{ padding: "20px" }}
						data-cy="user-settings-button"
					>
						<SVG.CogWheel />
					</Styled.Button>
				</Styled.ButtonContainer>

				{channelData?._id && <ChannelButtons />}

				<Styled.SupportButton
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
					onClick={() => {
						dispatch(
							handleTutorialAction({
								condition: modal.type === "Tutorial",
								trueState: { type: "Help", data: { isTutorial: true, page: 7 } },
								falseState: { type: "Help", data: {} }
							})
						)
					}}
				>
					<SVG.QuestionMark width="24px" style={{ marginRight: "12px" }} /> Help
				</Styled.SupportButton>
			</Styled.Container>
		</>
	)
}

export default Sidebar
