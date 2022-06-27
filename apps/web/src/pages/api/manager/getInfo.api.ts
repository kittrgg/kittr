import type { NextApiRequest, NextApiResponse } from "next"
import admin from "@Services/firebase/admin"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"

const handler = createHandler(userAuth)

// Get info for manager
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { uid } = req.query

	try {
		const user = await admin.getUser(uid as string)

		return res.status(200).json({
			uid: user.uid,
			displayName: user.displayName,
			email: user.email
		})
	} catch (error) {
		return res.status(500).json({
			error: true,
			message: "We did something wrong. Error Code: 4358"
		})
	}
})

export default handler
