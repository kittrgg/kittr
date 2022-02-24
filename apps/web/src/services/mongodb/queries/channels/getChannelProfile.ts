import { Channel } from "@Services/mongodb/models"
import { serializeChannels } from "@Services/mongodb/utils/serializeChannels"

interface IFunc {
	/**
	 * @params
	 *  urlSafeName of the channel
	 *
	 * @returns
	 * Promise with array of channels, ordered by view count (channels do not have kits, managers, or games on them)
	 *
	 */
	(
		/** urlSafeName of the channel */
		urlSafeName: string
	): Promise<IChannel>
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the urlSafeName of the channel, get their full profile including kits and games.
 * Does not include dashboard specific information.
 */
export const getChannelProfileQuery: IFunc = async (urlSafeName) => {
	const rawChannel = await Channel.find({ urlSafeName }).lean<IChannel[]>()

	if (rawChannel.length === 0) {
		return {} as IChannel
	}

	const serialized = (await serializeChannels(rawChannel))[0]

	const channel = serialized

	return channel
}
