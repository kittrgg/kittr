import { GetServerSideProps } from "next"
import { getRawChannelProfileQuery } from "@Services/mongodb"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import KitOverlay from "@Features/Overlays/ActiveKit"
interface Props {
	_id: string
	isPremium: boolean
}

export const Overlay = ({ _id, isPremium }: Props) => {
	if (isPremium) {
		return <KitOverlay _id={_id} />
	}

	return null
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	await connectToDatabase()
	const rawChannel = await getRawChannelProfileQuery(query.channel as string)

	return {
		props: {
			_id: rawChannel._id.toString(),
			isPremium: !!rawChannel.meta.premiumType
		}
	}
}

export default Overlay
