import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import admin from "@Services/firebase/admin"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { FirebaseError } from "firebase-admin"
import { prisma, Channel, ChannelManagerRoles } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Add a new manager to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { email, channelId, role, token } = JSON.parse(req.body) as {
		email: string
		channelId: string
		role: ChannelManagerRoles
		token: any
	}

	const result = await prisma.channel.findFirst({
		where: {
			id: channelId
		},
		include: {
			managers: true
		}
	})

	if (!result) {
		return res.status(404).json({ error: true, errorMessage: "Channel not found." })
	}

	const userRole = result.managers.find((manager) => manager.firebaseId === token.uid)?.role

	if (userRole === "ADMIN" || userRole === "OWNER") {
		try {
			const user = await admin.getUserByEmail(email)

			if (user) {
				try {
					const data = await prisma.channel.update({
						where: {
							id: channelId
						},
						data: {
							managers: {
								create: {
									firebaseId: user.uid,
									role: role
								}
							}
						}
					})
					if (!data) {
						return res.status(409).json({
							error: true,
							errorMessage: "This manager already has a role."
						})
					}

					return res.status(200).json(data)
				} catch (error) {
					console.log(error)
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
