import KitOverlay from "@Features/Overlays/ActiveKit"
import { createSSGHelper } from "@Server/createSSGHelper"
import { trpc } from "@Server/createTRPCNext"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

export const Overlay = () => {
	const { query } = useRouter()
	const { channel: urlChannel } = query as { game: string; channel: string }

	const { data: channel } = trpc.getChannelProfile.useQuery(urlChannel, {
		enabled: !!urlChannel
	})

	if (channel?.plan?.type === "PREMIUM") {
		return <KitOverlay id={channel.id} />
	}

	return null
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const ssg = await createSSGHelper()

	// const channel = await ssg.fetchQuery("channels/profile/get", query.channel as string)
	const channel = await ssg.getChannelProfile.fetch(query.channel as string)

	if (channel) {
		// await ssg.fetchQuery("channels/overlay/get", channel.id)
		await ssg.getOverlay.fetch(channel.id)
	}

	return {
		props: {
			trpcState: ssg.dehydrate()
		}
	}
}

export default Overlay
