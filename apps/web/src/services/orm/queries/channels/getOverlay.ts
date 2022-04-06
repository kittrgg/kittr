import { prisma, Prisma } from "@kittr/prisma"

const include = Prisma.validator<Prisma.ChannelInclude>()({
	overlay: {
		include: {
			channel: {
				include: {
					profile: {
						include: {
							brandColors: true
						}
					}
				}
			},
			primaryKit: true,
			secondaryKit: true
		}
	}
})

interface Params {
	id: string
}

export const getOverlayQuery = async ({ id }: Params) => {
	const result = await prisma.channel.findFirst({
		where: { id },
		include
	})

	return result
}

export type getOverlayQueryReturnType = Prisma.PromiseReturnType<typeof getOverlayQuery>
