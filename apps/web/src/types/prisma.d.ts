import { Prisma, Channel, ChannelLink } from "@kittr/prisma"

const GameWithIncludes = Prisma.validator<Prisma.GameArgs>()({
	include: { genres: true, platforms: true }
})

export type GameWithGenresAndPlatforms = Prisma.GameGetPayload<typeof GameWithIncludes>

export interface ChannelWithLinks extends Channel {
	links: ChannelLink[]
}
