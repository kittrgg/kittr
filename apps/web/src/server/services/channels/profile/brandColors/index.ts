import { prisma } from "@kittr/prisma"
import { checkRole } from "@Server/services/users"

export const upsertBrandColor = async ({
	authToken,
	channelId,
	colorId,
	newColor
}: {
	authToken: string
	channelId: string
	colorId: string
	newColor: string
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

	const channelProfile = await prisma.channelProfile.update({
		where: {
			channelId
		},
		data: {
			brandColors: {
				update: {
					where: {
						id: colorId
					},
					data: {
						value: newColor
					}
				}
			}
		}
	})

	return channelProfile
}
