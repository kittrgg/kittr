import { useState, useEffect } from "react"
import styled from "styled-components"

import { ITwitchDataForProfilePage } from "@kittr/types"
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
import { CompleteChannelWithCompleteKits, CompleteChannelProfile } from "@Types/prisma"

interface Props {
	channel: CompleteChannelWithCompleteKits & { profile: CompleteChannelProfile }
	twitchInfo: ITwitchDataForProfilePage
}

const ChannelProfile = ({ channel, twitchInfo }: Props) => {
	const isPremium = channel.plan.type === "premium"
	const hasCoverPhoto = channel.profile.hasCoverPhoto
	const primaryColor = channel.profile.brandColors.find((color) => color.type === "primary")?.value || colors.white
	const [coverPhotoPath, setCoverPhotoPath] = useState("")

	useEffect(() => {
		if (isPremium && hasCoverPhoto) download(`${channel.id}-profile-cover-photo`, (path) => setCoverPhotoPath(path))
	}, [channel.id, hasCoverPhoto, isPremium])

	return (
		<Container>
			<Header {...channel} isLive={twitchInfo.channelData?.type === "live"} imagePath={coverPhotoPath} />
			<Games games={channel.games} urlSafeName={channel.urlSafeName} />
			<FeaturedKits kits={channel.kits} />
			{isPremium ? (
				<>
					<PopularClips clips={twitchInfo.clips} brandColor={primaryColor} />
					<RecentVideos
						videos={twitchInfo.recentVideos}
						brandColor={primaryColor}
						coverPhotoPath={coverPhotoPath}
						profileImagePath={channel.profile.hasProfileImage ? channel.id : ""}
					/>

					<Schedule schedule={twitchInfo.schedule} brandColor={primaryColor} />
					<SetupPhotos id={channel.id} setupPhotos={channel.profile.setupPhotos} />
					<Specs specs={channel.profile.channelPcSpecs} brandColor={primaryColor} />
					<Affiliates affiliates={channel.profile.affiliates} brandColor={primaryColor} />
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
