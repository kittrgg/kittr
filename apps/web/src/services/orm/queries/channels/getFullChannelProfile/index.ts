import { Prisma, prisma } from "@kittr/prisma"

interface Params {
	id?: string
	urlSafeName?: string
}

export const getFullChannelProfileQuery = async ({ id, urlSafeName }: Params) => {
	if (!id && !urlSafeName) {
		throw new Error("Need either id or urlSafeName")
	}

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
			warzoneKits: {
				orderBy: {
					base: {
						displayName: "asc"
					}
				},
				include: {
					base: {
						include: {
							category: true
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
			}
		}
	})
	return channel
}

export type getFullChannelProfileType = Prisma.PromiseReturnType<typeof getFullChannelProfileQuery>

export * from "./deserializer"
export * from "./serializer"
