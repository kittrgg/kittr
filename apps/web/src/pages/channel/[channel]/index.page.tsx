import { useRouter } from "next/router"
import ChannelProfile from "@Features/ChannelProfile"
import { NoItemFound } from "@Components/shared"
import PageWrapper from "@Components/layouts/PageWrapper"
import { getTopChannelsQuery } from "@Services/orm"
import FallbackPage from "@Components/layouts/FallbackPage"
import { createSSGHelper } from "@Server/createSSGHelper"
import { trpc } from "@Server/createHooks"

const ChannelProfilePage = () => {
	const { isFallback, query } = useRouter()
	const { urlSafeName } = query as { urlSafeName: string }
	const { data: channel } = trpc.useQuery(["channels/profile/get", urlSafeName])

	if (isFallback) return <FallbackPage />

	if (!channel) {
		return <NoItemFound type="channel" />
	}

	return (
		<PageWrapper
			title={`${query.channel}'s Profile | kittr`}
			description={`${query.channel}'s wants to share their kits with you.`}
		>
			<ChannelProfile />
		</PageWrapper>
	)
}

export const getStaticPaths = async () => {
	const channels = await getTopChannelsQuery({ limit: 30, skip: 0 })
	const paths = channels.map((channel) => ({ params: { channel: channel.urlSafeName } }))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps = async ({ params }: { params: { channel: string } }) => {
	const { channel: urlSafeName } = params
	const ssg = await createSSGHelper()

	const channel = await ssg.fetchQuery("channels/profile/get", urlSafeName)
	const twitchLink = channel?.links.find((channel) => channel.property === "TWITCH")?.value

	let twitchInfo = null

	if (twitchLink) {
		twitchInfo = await ssg.fetchQuery("twitch/profile-page", twitchLink)
	}

	return {
		props: {
			twitchInfo
		},
		revalidate: 60
	}
}

export default ChannelProfilePage
