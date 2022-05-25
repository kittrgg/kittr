import { GetServerSideProps } from "next"
import { getRawChannelQuery } from "@Services/orm"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import KitOverlay from "@Features/Overlays/ActiveKit"
interface Props {
	id: string
	isPremium: boolean
}

export const Overlay = ({ id, isPremium }: Props) => {
	if (isPremium) {
		return <KitOverlay id={id} />
	}

	return null
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	await connectToDatabase()
	const rawChannel = await getRawChannelQuery({ id: query.id as string })

	return {
		props: {
			id: rawChannel?.id.toString(),
			isPremium: !!rawChannel?.plan?.type
		}
	}
}

export default Overlay
