import { useEffect, useRef } from "react"
import * as Styled from "./style"

import { useDispatch } from "@Redux/store"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { setModal, resetToInitialKit, clearKitEditor } from "@Redux/slices/dashboard"

import ChooseBase from "./ChooseBase"
import Featured from "./Featured"
import YoutubeId from "./YoutubeURL"
import TiktokId from "./TiktokId"
import CustomTitle from "./CustomTitle"
import Options from "./Options"
import Blueprint from "./Blueprint"
import EditorSnackbar from "./EditorSnackbar"
import ChannelQuote from "./ChannelQuote"
import SVG from "@Components/shared/SVG"
import QuickCommandExport from "../../../../modals/ExportBotCommands/QuickCommandExport"
import { useModal } from "@Redux/slices/dashboard/selectors"

/** The Kit Editor. Where the magic happens. */
const KitEditor = ({ ...props }) => {
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
					{activeKit.base?._id && (
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
