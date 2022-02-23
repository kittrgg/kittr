import { Channel } from "@Services/mongodb/models"

interface IFunc {
	/**
	 * @params
	 *  _id of the channel
	 *
	 * stripeId as returned from the Stripe Customer API
	 *
	 * @returns
	 * Promise fulfilled with the newly edited raw channel object
	 *
	 */
	(
		/** _id of the channel */
		_id: string,
		stripeId: string
	): Promise<IRawChannel>
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the _id of the channel, get the stripeId.
 */
export const updateStripeId: IFunc = async (_id, stripeId) => {
	const rawChannel = await Channel.findOneAndUpdate({ _id }, { $set: { "meta.stripeId": stripeId } }, { new: true })

	if (!rawChannel) return {} as IRawChannel

	return { ...rawChannel, _id: rawChannel._id.toString(), createdDate: rawChannel.createdDate.toString() }
}
