import { GetStaticProps } from "next"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { useRouter } from "next/router"

import ChannelProfile from "@Features/ChannelProfile"
import { NoItemFound } from "@Components/shared"
import PageWrapper from "@Components/layouts/PageWrapper"
import { getChannelProfileQuery, getChannelsQuery } from "@Services/mongodb"
import { profilePageQuery } from "@Services/twitch/getProfilePageData"
import FallbackPage from "@Components/layouts/FallbackPage"

interface Props {
	channel: IChannel
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

	const leanChannels = await getChannelsQuery({ limit: 30 })
	const channels = leanChannels.map((channel) => ({ urlSafeName: channel.urlSafeName }))
	const paths = channels.map((channel) => ({ params: { channel: channel.urlSafeName } }))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { channel: urlSafeName } = params as { channel: string }

	await connectToDatabase()

	const channel = await getChannelProfileQuery(urlSafeName)
	const twitchInfo = await profilePageQuery(channel.urlSafeName)

	return {
		props: {
			channel,
			twitchInfo
		},
		revalidate: 60
	}
}

export default ChannelProfilePage
