import { Channel, prisma } from "@kittr/prisma"

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
		id: string,
		stripeId: string
	): Promise<Channel & {plan: {stripeSubscriptionId: string  } | null } >
}

/**
 * SERVER SIDE ONLY!
 *
 * Using the _id of the channel, get the stripeId.
 */
export const updateStripeId: IFunc = async (id, stripeId) => {
	const channel = await prisma.channel.update({
		where: {
			id
		},
		data: {
			plan: {
				update: {
					stripeSubscriptionId: stripeId
				}}
		},
		include: {
			plan: {
				select: {
					stripeSubscriptionId: true
				}
			}
		}
	})

return channel
}
