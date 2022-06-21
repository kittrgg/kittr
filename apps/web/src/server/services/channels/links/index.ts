import { prisma, ChannelLink } from "@kittr/prisma"

export const updateLinks = async ({ channelId, links }: { channelId: string; links: ChannelLink[] }) => {
	const linksUpdate = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			links: {
				connectOrCreate: links.map((link) => {
					const { channelId, ...rest } = link

					return {
						where: {
							id: link.id
						},
						create: rest
					}
				})
			}
		}
	})

	return linksUpdate
}
