import { Channel, prisma } from "@kittr/prisma"
import { IRawChannel } from "@kittr/types/channel"

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
		id: string
	): Promise<string | undefined>
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the _id of the channel, get the stripeId.
 */
export const getStripeId: IFunc = async (id ) => {
	const channel = await prisma.channel.findFirst({
		where: {
			id
		},
		select: {
			plan: {
				select: {
					stripeSubscriptionId: true
				}
			}
		}
	})

return channel?.plan?.stripeSubscriptionId
}
