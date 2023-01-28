import { prisma } from "@kittr/prisma"

export const upsertBrandColor = async ({
	channelId,
	colorId,
	newColor
}: {
	channelId: string
	colorId?: string
	newColor: string
}) => {
	const channelProfile = await prisma.channelProfile.update({
		where: {
			channelId
		},
		data: {
			brandColors: {
				upsert: {
					where: {
						id: colorId ?? ""
					},
					create: { type: "PRIMARY", value: newColor },
					update: { type: "PRIMARY", value: newColor }
				}
			}
		}
	})

	return channelProfile
}
