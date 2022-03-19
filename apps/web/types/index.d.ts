import { Prisma } from "@kittr/prisma"

const userWithPosts = Prisma.validator<Prisma.GameArgs>()({
	include: { genres: true, platforms: true }
})

export type GameWithGenresAndPlatforms = Prisma.GameGetPayload<typeof userWithPosts>
