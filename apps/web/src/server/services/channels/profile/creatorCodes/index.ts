import { prisma, ChannelAffiliateCode } from "@kittr/prisma"
import { checkRole } from "@Server/services/users"

export const upsertCode = async ({
	authToken,
	codeUpdate
}: {
	authToken: string
	codeUpdate: ChannelAffiliateCode
}) => {
	await checkRole({ authToken, channelId: codeUpdate.channelId, roles: ["OWNER", "ADMIN"] })

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
