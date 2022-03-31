import { GetStaticProps, InferGetStaticPropsType } from "next"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { useRouter } from "next/router"
import ChannelProfile from "@Features/ChannelProfile"
import { NoItemFound } from "@Components/shared"
import PageWrapper from "@Components/layouts/PageWrapper"
import { getTopChannelsQuery } from "@Services/orm"
import { profilePageQuery, ProfilePageQueryReturnType } from "@Services/twitch/getProfilePageData"
import FallbackPage from "@Components/layouts/FallbackPage"
import {
	getFullChannelProfileQuery,
	serializeFullChannelProfile,
	deserializeFullChannelProfile,
	SerializeFullChannelProfileReturnType
} from "@Services/orm/queries/channels/getFullChannelProfile"

const ChannelProfilePage = ({ channel, twitchInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { isFallback, query } = useRouter()
	if (isFallback) return <FallbackPage />

	if (!channel) {
		return <NoItemFound type="channel" />
	}

	const deserializedChannel = deserializeFullChannelProfile(channel)

	return (
		<PageWrapper
			title={`${query.channel}'s Profile | kittr`}
			description={`${query.channel}'s wants to share their kits with you.`}
		>
			<ChannelProfile channel={deserializedChannel} twitchInfo={twitchInfo} />
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

export const getStaticProps: GetStaticProps<{
	channel: SerializeFullChannelProfileReturnType | null
	twitchInfo: ProfilePageQueryReturnType
}> = async ({ params }) => {
	const { channel: urlSafeName } = params as { channel: string }

	await connectToDatabase()

	const channel = await getFullChannelProfileQuery({ urlSafeName })
	let twitchInfo = {} as ProfilePageQueryReturnType

	if (!channel) {
		return {
			props: {
				channel: null,
				twitchInfo
			}
		}
	}

	const serializedChannel = serializeFullChannelProfile(channel)
	const twitchLink = channel?.links.find((channel) => channel.property === "TWITCH")?.value

	if (twitchLink) {
		twitchInfo = await profilePageQuery(twitchLink)
	}

	return {
		props: {
			channel: serializedChannel,
			twitchInfo
		},
		revalidate: 60
	}
}

export default ChannelProfilePage
