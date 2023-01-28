import Affiliates from "./Affiliates"
import FeaturedKits from "./FeaturedKits"
import Games from "./Games"
import Header from "./Header"
import PopularClips from "./PopularClips"
import PremiumCallout from "./PremiumCallout"
import RecentVideos from "./RecentVideos"
import Schedule from "./Schedule"
import SetupPhotos from "./SetupPhotos"
import Specs from "./Specs"
import colors from "@Colors"
import { trpc } from "@/lib/trpc"
import { download } from "@kittr/firebase/storage"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"

const ChannelProfile = () => {
	const { query } = useRouter()
	const { channel: urlChannel } = query as { channel: string }

	const { data: channel } = trpc.channels.profile.get.useQuery(urlChannel, {
		enabled: !!urlChannel
	})
	const twitchLink = channel?.links.find((channel) => channel.property === "TWITCH")?.value
	const { data: twitchInfo } = trpc.twitch["profile-page"].useQuery(twitchLink as string, {
		enabled: !!twitchLink,
		retry: false
	})

	const isPremium = channel?.plan?.type === "PREMIUM"
	const hasCoverPhoto = channel?.profile?.hasCoverPhoto
	const primaryColor = channel?.profile?.brandColors.find((color) => color.type === "PRIMARY")?.value || colors.white
	const [coverPhotoPath, setCoverPhotoPath] = useState("")

	useEffect(() => {
		if (isPremium && hasCoverPhoto) download(`${channel.id}-profile-cover-photo`, (path) => setCoverPhotoPath(path))
	}, [channel?.id, hasCoverPhoto, isPremium])

	if (!channel) return null

	return (
		<Container>
			<Header {...channel} isLive={twitchInfo?.channelData?.type === "live"} imagePath={coverPhotoPath} />
			<Games games={channel.games} urlSafeName={channel.urlSafeName} />
			<FeaturedKits kits={channel.warzoneKits} />
			{isPremium ? (
				<>
					<PopularClips clips={twitchInfo?.clips} brandColor={primaryColor} />
					<RecentVideos
						videos={twitchInfo?.recentVideos}
						brandColor={primaryColor}
						coverPhotoPath={coverPhotoPath}
						hasProfileImage={!!channel.profile?.hasProfileImage}
						profileImagePath={channel.profile?.hasProfileImage ? channel.id : ""}
					/>

					<Schedule schedule={twitchInfo?.schedule} brandColor={primaryColor} />
					<SetupPhotos id={channel.id} setupPhotos={channel.profile?.setupPhotos || []} />
					<Specs specs={channel.profile?.channelPcSpecs || []} brandColor={primaryColor} />
					<Affiliates affiliates={channel.profile?.affiliates || []} brandColor={primaryColor} />
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
