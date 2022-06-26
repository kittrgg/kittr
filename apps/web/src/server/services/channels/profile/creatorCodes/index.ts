import { ChannelCreatorCode, prisma } from "@kittr/prisma"

export const upsertCode = async ({ codeUpdate }: { codeUpdate: ChannelCreatorCode }) => {
	const { channelId, gameId, code, id } = codeUpdate

	const newCode = {
		id,
		code,
		game: {
			connect: {
				id: gameId
			}
		},
		channel: {
			connect: {
				id: channelId
			}
		}
	}

	const gameAffiliateCode = await prisma.channelCreatorCode.upsert({
		where: {
			id: codeUpdate.id
		},
		update: newCode,
		create: newCode
	})

	return gameAffiliateCode
}
