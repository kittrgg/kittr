import { prisma } from "@kittr/prisma"

export const upsertBrandColor = async ({
	channelId,
	colorId,
	newColor
}: {
	channelId: string
	colorId: string
	newColor: string
}) => {
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
