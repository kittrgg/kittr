import { prisma, Channel } from "@kittr/prisma"

interface Params {
	id: string
}

export const getRawChannelQuery = async ({ id }: Params) => {
	const rawChannel = await prisma.channel.findFirst({
		where: { id },
		include: {
			plan: true
		}
	})

	return rawChannel
}
