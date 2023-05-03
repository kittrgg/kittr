import colors from "@Colors"
import { SideScroller } from "@Components/shared"
import { montserrat } from "@Styles/typography"
import type { ITwitchClip } from "@kittr/types"
import { getDate, getMonth, getYear } from "date-fns"
import styled from "styled-components"
import { H2 } from "./style"

interface Props {
	clips?: ITwitchClip[]
	brandColor: string
}

function PopularClips({ clips, brandColor }: Props) {
	// If channel doesn't have any clips.
	if (clips?.length === 0) return null

	return (
		<section id="clips">
			<H2>POPULAR CLIPS</H2>
			<SideScroller childMargin="10px" wrapperStyles={{ width: "100vw" }}>
				{clips?.map((clip: any) => {
					const month = getMonth(new Date(clip.created_at))
					const day = getDate(new Date(clip.created_at))
					const year = getYear(new Date(clip.created_at))

					return (
						<ClipContainer
							brandColor={brandColor}
							href={clip.url}
							image={clip.thumbnail_url}
							key={clip.id}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Duration>{clip.duration.toFixed(0)}s</Duration>
							<ViewCount>
								{clip.view_count} {clip.view_count === 1 ? "view" : "views"}
							</ViewCount>
							<Timestamp>
								{month}/{day}/{year}
							</Timestamp>
						</ClipContainer>
					)
				})}
			</SideScroller>
		</section>
	)
}

export default PopularClips

// Styled Components

const ClipContainer = styled.a<{ image: string; brandColor: string }>`
	display: block;
	position: relative;
	// Maintain a .55 ratio with these padding values
	padding-left: 300px;
	padding-bottom: 166px;
	background-image: url("${(props) => props.image}");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${colors.white};
	${montserrat};
	font-size: 18px;
	text-decoration: none;
	transition: 0.2s;
	border: 6px solid transparent;

	&:hover {
		border: 6px solid ${(props) => props.brandColor};
	}
`

const Duration = styled.div`
	position: absolute;
	top: 12px;
	left: 12px;
	padding: 4px;
	background: rgba(0, 0, 0, 0.3);
`

const ViewCount = styled.div`
	position: absolute;
	bottom: 12px;
	left: 12px;
	padding: 4px;
	background: rgba(0, 0, 0, 0.3);
`

const Timestamp = styled.div`
	position: absolute;
	bottom: 12px;
	right: 12px;
	padding: 4px;
	background: rgba(0, 0, 0, 0.3);
`
