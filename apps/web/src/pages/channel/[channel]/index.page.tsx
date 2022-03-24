import { ITwitchDataForProfilePage } from "@kittr/types/twitch"
import { GetStaticProps } from "next"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { useRouter } from "next/router"

import ChannelProfile from "@Features/ChannelProfile"
import { NoItemFound } from "@Components/shared"
import PageWrapper from "@Components/layouts/PageWrapper"
import { getChannelProfileQuery, getTopChannelsQuery } from "@Services/orm"
import { profilePageQuery } from "@Services/twitch/getProfilePageData"
import FallbackPage from "@Components/layouts/FallbackPage"
import { CompleteChannelProfile, CompleteChannelWithCompleteKits } from "@Types/prisma"

interface Props {
	channel: CompleteChannelWithCompleteKits & { profile: CompleteChannelProfile }
	twitchInfo: ITwitchDataForProfilePage
}

const ChannelProfilePage = ({ channel, twitchInfo }: Props) => {
	const { isFallback } = useRouter()
	if (isFallback) return <FallbackPage />

	if (Object.keys(channel).length === 0) {
		return <NoItemFound type="channel" />
	}

	return (
		<PageWrapper
			title={`${channel.displayName}'s Profile | kittr`}
			description={`${channel.displayName}'s wants to share their kits with you.`}
		>
			<ChannelProfile channel={channel} twitchInfo={twitchInfo} />
		</PageWrapper>
	)
}

export const getStaticPaths = async () => {
	await connectToDatabase()

	const channels = await getTopChannelsQuery({ limit: 30, skip: 0 })
	const paths = channels.map((channel) => ({ params: { channel: channel.urlSafeName } }))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { channel: urlSafeName } = params as { channel: string }

	await connectToDatabase()

	const channel = await getChannelProfileQuery({ serialized: true, urlSafeName })
	const twitchLink = channel?.links.find((channel) => channel.property === "TWITCH")?.value

	let twitchInfo = {}

	if (twitchLink) {
		twitchInfo = await profilePageQuery(twitchLink)
	}

	return {
		props: {
			channel,
			twitchInfo
		},
		revalidate: 60
	}
}

export default ChannelProfilePage
