import { Channel } from "@Services/mongodb/models"

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
	): Promise<IRawChannel>
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the urlSafeName of the channel, get the raw mongodb document for the profile of a channel including kits and games.
 * Does not include dashboard specific information.
 */
export const getRawChannelProfileQuery: IFunc = async (urlSafeName) => {
	const rawChannel = await Channel.find({ urlSafeName }).lean<IRawChannel[]>()

	if (rawChannel.length === 0) {
		return {} as IRawChannel
	}

	return rawChannel[0]
}
