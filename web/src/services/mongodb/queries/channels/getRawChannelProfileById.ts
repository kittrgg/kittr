import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"

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
		_id: string
	): Promise<ChannelModel>
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the urlSafeName of the channel, get the raw mongodb document for the profile of a channel including kits and games.
 * Does not include dashboard specific information.
 */
export const getRawChannelProfileByIdQuery: IFunc = async (_id) => {
	const rawChannel = await Channel.find({ _id }).lean()
	return rawChannel[0]
}
