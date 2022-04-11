import { prisma, Channel } from "@kittr/prisma"

interface Params {
	id: string
}

export const getRawChannelQuery = async ({ id }: Params): Promise<Channel | null> => {
	const rawChannel = await prisma.channel.findFirst({
		where: { id }
	})

	return rawChannel
}
