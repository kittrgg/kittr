import { prisma, ChannelLink } from "@kittr/prisma"

export const updateLinks = async ({ channelId, links }: { channelId: string; links: ChannelLink[] }) => {
	const linksUpdate = await prisma.channelLink.updateMany({
		where: {
			channelId
		},
		data: links
	})

	return linksUpdate
}
