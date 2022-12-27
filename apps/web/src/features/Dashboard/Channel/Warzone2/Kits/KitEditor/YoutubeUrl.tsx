import * as Styled from "./style"
import colors from "@Colors"
import TextInput from "@Components/shared/TextInput"
import { updateYoutubeURL } from "@Redux/slices/dashboard"
import { useActiveKit } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { trimPrefix } from "@Utils/helpers/trimPrefix"

const YoutubeId = ({ ...props }) => {
	const dispatch = useDispatch()
	const { youtubeUrl } = useActiveKit()

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.includes("youtu.be")) {
			return dispatch(updateYoutubeURL(e.target.value.split("/").slice(-1)[0]))
		}

		if (e.target.value.includes("m.youtube.com")) {
			return dispatch(updateYoutubeURL(e.target.value.split("v=").slice(-1)[0]))
		}

		return dispatch(updateYoutubeURL(trimPrefix("https://www.youtube.com/watch?v=", e.target.value)))
	}

	return (
		<Styled.Container>
			<Styled.HorizFlex>
				<Styled.Header>YOUTUBE EMBED</Styled.Header>
				<Styled.HeaderHelper>Optional</Styled.HeaderHelper>
			</Styled.HorizFlex>
			<Styled.ParagraphHelper>
				Enter the link to your YouTube video below. We HIGHLY recommend that the video be about either this kit
				specifically or a general "loadouts" video.
			</Styled.ParagraphHelper>
			<Styled.ParagraphHelper>Tip: You can adjust autoplay in your account settings.</Styled.ParagraphHelper>
			<TextInput
				type="text"
				name="youtubeUrl"
				label="https://www.youtube.com/watch?v="
				labelStyles={{ color: colors.lighter, display: "block", marginTop: "12px", textTransform: "initial" }}
				value={youtubeUrl || ""}
				subline="If you want to just copy-paste the whole YouTube link, we'll trim it for you. We know, we know, you're welcome."
				onChange={(e) => handleInput(e)}
				inputStyles={{ marginLeft: "0", marginTop: "0" }}
				sublineStyles={{ color: colors.lighter, fontWeight: "initial", letterSpacing: "1px" }}
			/>
		</Styled.Container>
	)
}

export default YoutubeId
