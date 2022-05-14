import { Prisma, prisma } from "@kittr/prisma"

interface Params {
	id: string
	urlSafeName: string
}

export const getFullChannelProfileQuery = async ({ id, urlSafeName }: Params) => {
	const channel = await prisma.channel.findFirst({
		where: {
			id,
			urlSafeName
		},
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
				orderBy: {
					base: {
						displayName: "asc"
					}
				},
				include: {
					base: {
						include: {
							category: true,
							stats: true
						}
					},
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
	return channel
}

export type getFullChannelProfileType = Prisma.PromiseReturnType<typeof getFullChannelProfileQuery>

export * from "./deserializer"
export * from "./serializer"
