import KitOverlay from "@Features/Overlays/ActiveKit"
import { trpc } from "@Server/createHooks"
import { createSSGHelper } from "@Server/createSSGHelper"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

export const Overlay = () => {
	const { query } = useRouter()
	const { channel: urlChannel } = query as { game: string; channel: string }

	const { data: channel } = trpc.useQuery(["channels/profile/get", urlChannel])

	if (channel?.plan?.type === "premium") {
		return <KitOverlay id={channel.id} />
	}

	return null
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const ssg = await createSSGHelper()

	const channel = await ssg.fetchQuery("channels/profile/get", query.channel as string)

	if (channel) {
		await ssg.fetchQuery("channels/overlay/get", channel.id)
	}

	return {
		props: {
			trpcState: ssg.dehydrate()
		}
	}
}

export default Overlay
