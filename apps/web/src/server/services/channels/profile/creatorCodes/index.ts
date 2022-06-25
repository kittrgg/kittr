import { prisma, ChannelAffiliateCode } from "@kittr/prisma"

export const upsertCode = async ({
	codeUpdate
}: {
	codeUpdate: ChannelAffiliateCode
}) => {

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

	const gameAffiliateCode = await prisma.channelAffiliateCode.upsert({
		where: {
			id: codeUpdate.id
		},
		update: newCode,
		create: newCode
	})

	return gameAffiliateCode
}
