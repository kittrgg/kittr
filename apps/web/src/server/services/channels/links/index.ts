import { prisma, ChannelLink } from "@kittr/prisma"

export const updateLinks = async ({ channelId, links }: { channelId: string; links: ChannelLink[] }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, newLinks] = await prisma.$transaction([
		prisma.channelLink.deleteMany({
			where: {
				channelId
			}
		}),
		prisma.channel.update({
			where: {
				id: channelId
			},
			data: {
				links: {
					createMany: {
						data: links.map((link) => {
							// eslint-disable-next-line @typescript-eslint/no-unused-vars
							const { channelId, id, ...rest } = link
							return rest
						})
					}
				}
			}
		})
	])

	return newLinks
}
