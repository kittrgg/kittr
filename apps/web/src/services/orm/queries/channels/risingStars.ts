import type { Channel } from "@kittr/prisma"
import { Prisma, prisma } from "@kittr/prisma"

const include = Prisma.validator<Prisma.ChannelInclude>()({
	profile: true
})

export type TChannelWithIncludeProfile = Channel

export const getRisingStarsQuery = async ({
	limit,
	skip,
	viewsGreaterThan
}: {
	skip: number
	limit: number
	viewsGreaterThan: number
}) => {
	const where = {
		profile: {
			hasProfileImage: process.env.IS_DEV ? undefined : true
		},
		viewCount: {
			gte: viewsGreaterThan
		}
	}

	const channelCount = await prisma.channel.count({
		where
	})

	const randomSkip = Math.min(channelCount - skip, Math.max(skip, Math.floor(Math.random() * channelCount)))

	const result = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		where,
		skip: randomSkip,
		take: limit,
		include
	})

	return result
}

export type getRisingStarsQueryReturnType = Prisma.PromiseReturnType<typeof getRisingStarsQuery>
