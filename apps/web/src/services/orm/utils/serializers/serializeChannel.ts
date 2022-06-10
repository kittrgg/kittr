import { Channel } from "@kittr/prisma"

export type SerializeChannelReturnType<T> = Omit<T, "createdAt"> & { createdAt: string }

export const serializeChannel = <T extends Channel>(channel: T): Omit<T, "createdAt"> & { createdAt: string } => {
	const serializedChannel = {
		...channel,
		createdAt: channel.createdAt.toISOString()
	}

	return serializedChannel
}

export const deserializeChannel = <T extends Omit<Channel, "createdAt"> & { createdAt: string }>(
	channel: T
): Omit<T, "createdAt"> & { createdAt: Date } => {
	const deserializedChannel = {
		...channel,
		createdAt: new Date(channel.createdAt)
	}

	return deserializedChannel
}
