import type { NextApiRequest, NextApiResponse } from "next"
import admin from "@Services/firebase/admin"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"
import { FirebaseError } from "firebase-admin"
import { sanitize } from "@Services/mongodb/utils/sanitize"
import { ChannelModel } from "@Models/Channel"

const handler = createHandler(userAuth)

// Add a manager to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { email, channelId, role, token } = JSON.parse(req.body)

	const result = await Channel.find({ _id: new mongoose.Types.ObjectId(sanitize(channelId)) }).lean()
	const userRole = result[0].managers.find((manager: IManager) => manager.uid === token.uid)?.role

	if (userRole === "Administrator" || userRole === "Owner") {
		try {
			const user = await admin.getUserByEmail(email)

			if (user) {
				try {
					const data = await Channel.findOneAndUpdate(
						{
							"_id": new mongoose.Types.ObjectId(sanitize(channelId)),
							"managers.uid": { $ne: user.uid }
						},
						{ $addToSet: { managers: { uid: user.uid, role: sanitize(role) } } },
						{ new: true }
					)

					if (!data) {
						return res.status(409).json({
							error: true,
							errorMessage: "This manager already has a role."
						})
					}

					return res.status(200).json(data)
				} catch (error) {
					return res.status(500).json({
						error: true,
						errorMessage: "We messed up. Please let us know that there is a problem. (Error code: 3457)"
					})
				}
			}
		} catch (error) {
			const isFirebaseError = (err: any): err is FirebaseError => {
				return !!err.code && !!err.message
			}

			if (isFirebaseError(error)) {
				if (error.code === "auth/invalid-email") {
					return res.status(404).json({
						error: true,
						errorMessage: "That's an invalid email."
					})
				}

				if (error.code === "auth/user-not-found") {
					return res.status(404).json({
						error: true,
						errorMessage:
							"Username doesn’t match our records. Be sure your new manager has already created a kittr account."
					})
				}
			}

			return res.status(500).json({
				error: true,
				errorMessage: "We messed up. Please let us know that there is a problem. (Error code: 3458)"
			})
		}
	} else {
		return res.status(403).json({ error: true, errorMessage: "You do not have permission to add a new manager." })
	}
})

export default handler
