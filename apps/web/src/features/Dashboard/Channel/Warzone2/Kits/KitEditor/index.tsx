import SVG from "@Components/shared/SVG"
import { setModal, resetToInitialKit, clearKitEditor } from "@Redux/slices/dashboard"
import { useActiveKit, useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { useEffect, useRef } from "react"
import QuickCommandExport from "../../../../modals/ExportBotCommands/QuickCommandExport"
import Blueprint from "./Blueprint"
import ChannelQuote from "./ChannelQuote"
import ChooseBase from "./ChooseBase"
import CustomTitle from "./CustomTitle"
import EditorSnackbar from "./EditorSnackbar"
import Featured from "./Featured"
import Options from "./Options"
import TiktokId from "./TiktokUrl"
import YoutubeId from "./YoutubeUrl"
import * as Styled from "./style"

/** The Kit Editor. Where the magic happens. */
function KitEditor() {
	const dispatch = useDispatch()
	const activeKit = useActiveKit()
	const modal = useModal()
	const scrollRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo(0, 0)
		}
	}, [activeKit])

	useEffect(() => {
		return () => {
			dispatch(clearKitEditor())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			{modal.type == "Quick Command Export" && <QuickCommandExport />}
			<Styled.Wrapper ref={scrollRef}>
				<Styled.HorizFlex>
					<Styled.Header style={{ marginBottom: "12px" }}>KIT EDITOR</Styled.Header>
					{activeKit.base.id ? (
						<SVG.TrashCan
							dataCy="trash-can"
							onClick={() => {
								resetToInitialKit()
								dispatch(setModal({ type: "Kit Delete Confirmation", data: activeKit }))
							}}
							style={{ width: "20px", marginRight: "24px", cursor: "pointer" }}
						/>
					) : null}
				</Styled.HorizFlex>
				<Styled.Scroller>
					<ChooseBase />
					<Featured />
					<CustomTitle />
					<Options />
					<YoutubeId />
					<TiktokId />
					<Blueprint />
					<ChannelQuote />
				</Styled.Scroller>
			</Styled.Wrapper>
			<EditorSnackbar />
		</>
	)
}

export default KitEditor
