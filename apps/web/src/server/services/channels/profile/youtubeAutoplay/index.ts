import { prisma } from "@kittr/prisma"
import { checkRole } from "@Server/services/users"

export const toggleYoutubeAutoplay = async ({
	authToken,
	channelId,
	shouldYoutubeAutoplay
}: {
	authToken: string
	channelId: string
	shouldYoutubeAutoplay: boolean
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

	const result = await prisma.channelProfile.update({
		where: {
			channelId
		},

		data: {
			youtubeAutoplay: shouldYoutubeAutoplay
		}
	})

	return result
}
