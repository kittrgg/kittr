import { prisma } from "@kittr/prisma"
import { ChannelKitOverlayModel } from "@kittr/prisma/validator"
import { z } from "zod"

export const toggle = async ({ channelId, newState }: { channelId: string; newState: boolean }) => {
	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			overlay: {
				update: {
					isOverlayVisible: newState
				}
			}
		}
	})

	return channel
}

export const getOverlay = async (id?: string) => {
	const overlay = await prisma.channelKitOverlay.findFirst({
		where: {
			channel: {
				id
			}
		},
		include: {
			primaryKit: {
				include: {
					options: true,
					base: {
						include: {
							commandCodes: true
						}
					}
				}
			},
			secondaryKit: {
				include: {
					options: true,
					base: {
						include: {
							commandCodes: true
						}
					}
				}
			}
		}
	})

	return overlay
}

const colorKeys = ChannelKitOverlayModel.pick({
	backgroundColorPrimary: true,
	backgroundColorSecondary: true,
	textColorPrimary: true,
	textColorSecondary: true,
	textColorAccent: true
})

type ColorKeys = z.infer<typeof colorKeys>

export const editColor = async ({
	channelId,
	color,
	colorKeyToChange
}: {
	channelId: string
	color: string
	colorKeyToChange: keyof ColorKeys
}) => {
	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			overlay: {
				update: {
					[colorKeyToChange]: color
				}
			}
		}
	})

	return channel
}
