import {
	prisma,
	Channel,
	Game,
	ChannelProfile,
	Kit,
	KitBase,
	KitOption,
	ChannelLink,
	ChannelPlan,
	ChannelBrandColor
} from "@kittr/prisma"

interface ProfileWithIncludes extends ChannelProfile {
	brandColors: ChannelBrandColor[]
}

interface KitWithIncludes extends Kit {
	kitbase: KitBase
	options: KitOption[]
}

interface ChannelWithIncludes extends Channel {
	games: Game[]
	profile: ProfileWithIncludes | null
	kits: KitWithIncludes[]
	links: ChannelLink[]
	plan: ChannelPlan | null
}

type WithSerialization<T, S extends boolean> = S extends true
	? Omit<T, "createdAt"> & {
			createdAt: string
	  }
	: T

type Value<S extends boolean> = WithSerialization<ChannelWithIncludes, S>

interface Params<S extends boolean> {
	urlSafeName: string
	serialized: S
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the urlSafeName of the channel, get their full profile including kits and games.
 * Does not include dashboard specific information.
 */
export const getChannelProfileQuery = async <S extends boolean>({
	urlSafeName,
	serialized
}: Params<S>): Promise<Value<S>> => {
	const channel = await prisma.channel.findFirst({
		where: {
			urlSafeName
		},
		include: {
			profile: {
				include: {
					brandColors: true
				}
			},
			kits: {
				include: {
					kitBase: true,
					options: true
				}
			},
			links: true,
			plan: true,
			games: true
		}
	})

	if (serialized && channel) {
		return {
			...channel,
			createdAt: channel.createdAt.toISOString(),
			games: channel.games.map((game) => ({
				...game,
				releaseDate: game.releaseDate.toISOString()
			}))
		} as any
	}

	return channel as any
}
