import { useState, useEffect } from "react"
import styled from "styled-components"

import colors from "@Colors"
import { download } from "@Services/firebase/storage"
import Header from "./Header"
import Games from "./Games"
import FeaturedKits from "./FeaturedKits"
import SetupPhotos from "./SetupPhotos"
import PopularClips from "./PopularClips"
import RecentVideos from "./RecentVideos"
import Schedule from "./Schedule"
import Specs from "./Specs"
import Affiliates from "./Affiliates"
import PremiumCallout from "./PremiumCallout"

interface Props {
	channel: IChannel
	twitchInfo: ITwitchDataForProfilePage
}

const ChannelProfile = ({ channel, twitchInfo }: Props) => {
	const isPremium = !!channel.meta.premiumType
	const hasCoverPhoto = !!channel.meta.hasCoverPhoto
	const primaryColor = channel.meta.brandColors?.primary || colors.white
	const [coverPhotoPath, setCoverPhotoPath] = useState("")

	useEffect(() => {
		if (isPremium && hasCoverPhoto) download(`${channel._id}-profile-cover-photo`, (path) => setCoverPhotoPath(path))
	}, [channel._id, hasCoverPhoto, isPremium])

	return (
		<Container>
			<Header {...channel} isLive={twitchInfo.channelData?.type === "live"} imagePath={coverPhotoPath} />
			<Games {...channel} />
			<FeaturedKits {...channel} />
			{isPremium ? (
				<>
					<PopularClips clips={twitchInfo.clips} brandColor={primaryColor} />
					<RecentVideos
						videos={twitchInfo.recentVideos}
						brandColor={primaryColor}
						coverPhotoPath={coverPhotoPath}
						profileImagePath={channel.meta.profileImage}
					/>
					<Schedule schedule={twitchInfo.schedule} brandColor={primaryColor} />
					<SetupPhotos {...channel} />
					<Specs specs={channel.meta.specs} brandColor={primaryColor} />
					<Affiliates affiliates={channel.meta.affiliates} brandColor={primaryColor} />
				</>
			) : (
				<PremiumCallout />
			)}
		</Container>
	)
}

export default ChannelProfile

//Styled Components

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 24px;
	margin-top: 12px;
`
