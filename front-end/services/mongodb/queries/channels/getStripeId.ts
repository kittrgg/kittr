import { Channel } from "@Services/mongodb/models"

interface IFunc {
	/**
	 * @params
	 *  _id of the channel
	 *
	 * @returns
	 * Promise fulfilled with the Stripe customer id of the account if it exists
	 *
	 */
	(
		/** _id of the channel */
		_id: string
	): Promise<string | undefined>
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the _id of the channel, get the stripeId.
 */
export const getStripeId: IFunc = async (_id) => {
	const rawChannel = await Channel.find({ _id }).lean<IRawChannel[]>()

	if (rawChannel.length === 0) {
		return undefined
	}

	return rawChannel[0].meta.stripeId
}
