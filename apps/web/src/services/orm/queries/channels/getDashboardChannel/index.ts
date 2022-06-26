import { Prisma, prisma } from "@kittr/prisma"

interface Params {
	id: string
	urlSafeName: string
}

export const getDashboardChannel = async ({ id, urlSafeName }: Params) => {
	const channel = await prisma.channel.findFirst({
		where: {
			id,
			urlSafeName
		},
		include: {
			customGameCommands: true,
			profile: {
				include: {
					brandColors: true,
					channelPcSpecs: true,
					affiliates: true,
					setupPhotos: true
				}
			},
			managers: true,
			warzoneKits: {
				orderBy: {
					base: {
						displayName: "asc"
					}
				},
				include: {
					base: {
						include: {
							category: true,
							commandCodes: true
						}
					}
				}
			},
			links: true,
			plan: true,
			games: true,
			gameAffiliateCodes: {
				include: {
					game: true
				}
			},
			overlay: {
				include: {
					primaryKit: true,
					secondaryKit: true
				}
			}
		}
	})
	return channel
}

export type getDashboardChannelReturnType = Prisma.PromiseReturnType<typeof getDashboardChannel>
