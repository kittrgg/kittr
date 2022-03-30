import { Prisma } from "@kittr/prisma"
import { SerializeGameReturnType } from "./serializeGame"

const ChannelWithIncludeAll = Prisma.validator<Prisma.ChannelArgs>()({
	include: {
		profile: {
			include: {
				brandColors: true,
				channelPcSpecs: true,
				affiliates: true,
				setupPhotos: true
			}
		},
		kits: {
			include: {
				kitBase: true,
				options: true
			}
		},
		links: true,
		plan: true,
		games: true,
		gameAffiliateCodes: {
			include: {
				game: true
			}
		}
	}
})

type CompleteFullChannel = Prisma.ChannelGetPayload<typeof ChannelWithIncludeAll>

interface CompleteFullChannelWithSerializedGames extends Omit<CompleteFullChannel, "games"> {
	games: SerializeGameReturnType[]
}

export const serializeFullChannel = (channel: CompleteFullChannel | CompleteFullChannelWithSerializedGames) => {
	const serializedChannel = {
		...channel,
		createdAt: channel.createdAt.toISOString()
	}

	return serializedChannel
}

export type SerializeFullChannelReturnType = ReturnType<typeof serializeFullChannel>
