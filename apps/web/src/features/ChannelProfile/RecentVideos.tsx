import { H2 } from "./style"
import colors from "@Colors"
import { SideScroller, ProfileImage } from "@Components/shared"
import { montserrat } from "@Styles/typography"
import { ITwitchVideo } from "@kittr/types"
import { getDate, getMonth, getYear } from "date-fns"
import styled from "styled-components"

interface Props {
	videos?: ITwitchVideo[]
	coverPhotoPath: string
	profileImagePath: string
	hasProfileImage: boolean
	brandColor: string
}

const RecentVideos = ({ videos, coverPhotoPath, profileImagePath, hasProfileImage, brandColor }: Props) => {
	// If channel doesn't have any videos.
	if (videos?.length === 0) return null

	return (
		<section id="videos">
			<H2>RECENT STREAMS</H2>
			<SideScroller childMargin="10px" wrapperStyles={{ width: "100vw" }}>
				{videos?.map((clip: any) => {
					const month = getMonth(new Date(clip.created_at))
					const day = getDate(new Date(clip.created_at))
					const year = getYear(new Date(clip.created_at))

					return (
						<ClipContainer
							key={clip.id}
							brandColor={brandColor}
							image={coverPhotoPath}
							href={clip.url}
							rel="noopener noreferrer"
							target="_blank"
						>
							<ProfileImageContainer>
								<ProfileImage imagePath={profileImagePath} hasProfileImage={hasProfileImage} />
							</ProfileImageContainer>
							<Duration>{clip.duration}</Duration>
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

export default RecentVideos

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

const ProfileImageContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
