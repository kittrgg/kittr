import { Prisma, prisma } from "@kittr/prisma"

const include = Prisma.validator<Prisma.ChannelInclude>()({
	profile: true
})

interface Params {
	take: number
}

export const getTopChannelsWithProfileQuery = async ({ take }: Params) => {
	const result = await prisma.channel.findMany({
		where: {
			profile: {
				hasProfileImage: process.env.IS_DEV ? undefined: true
			}
		},
		orderBy: {
			viewCount: "desc"
		},
		take,
		include
	})

	return result
}

export type getTopChannelsWithProfileQueryReturnType = Prisma.PromiseReturnType<typeof getTopChannelsWithProfileQuery>
