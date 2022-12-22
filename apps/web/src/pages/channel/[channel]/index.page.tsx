import PageWrapper from "@Components/layouts/PageWrapper"
import { NoItemFound } from "@Components/shared"
import ChannelProfile from "@Features/ChannelProfile"
import { trpc } from "@Server/createHooks"
import { createSSGHelper } from "@Server/createSSGHelper"
import { getTopChannelsQuery } from "@Services/orm"
import { useRouter } from "next/router"

const ChannelProfilePage = () => {
	const { query } = useRouter()
	const { channel: urlChannel } = query as { channel: string }
	const { data: channel } = trpc.useQuery(["channels/profile/get", urlChannel], {
		enabled: !!urlChannel
	})

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
		fallback: "blocking"
	}
}

export const getStaticProps = async ({ params }: { params: { channel: string } }) => {
	const { channel: urlSafeName } = params
	const ssg = await createSSGHelper()

	const channel = await ssg.fetchQuery("channels/profile/get", urlSafeName)
	const twitchLink = channel?.links.find((channel) => channel.property === "TWITCH")?.value

	try {
		if (twitchLink) {
			await ssg.fetchQuery("twitch/profile-page", twitchLink)
		}
	} catch (error) {
		console.log(`A Twitch profile was not found for user with urlSafeName ${urlSafeName}.`)
	}

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 60
	}
}

export default ChannelProfilePage
