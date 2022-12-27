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
import SVG from "@Components/shared/SVG"
import { setModal, resetToInitialKit, clearKitEditor } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useModal } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { useEffect, useRef } from "react"

/** The Kit Editor. Where the magic happens. */
const KitEditor = () => {
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
					{activeKit.base?.id && (
						<SVG.TrashCan
							style={{ width: "20px", marginRight: "24px", cursor: "pointer" }}
							onClick={() => {
								resetToInitialKit()
								dispatch(setModal({ type: "Kit Delete Confirmation", data: activeKit }))
							}}
							dataCy="trash-can"
						/>
					)}
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
