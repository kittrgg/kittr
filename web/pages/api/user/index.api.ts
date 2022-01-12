import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { signUp } from "@Services/firebase/auth/signUp"
import { badWordFilter } from "@Utils/helpers/badWordFilter"

const handler = createHandler()

// Add a new user to Firebase Auth
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { displayName, email, password } = JSON.parse(req.body)

	if (displayName.length > 26)
		return res.status(400).json({ error: true, message: "That name is too long. 25 characters or less" })

	if (badWordFilter(displayName)) {
		return res.status(400).json({ error: true, message: "Hey, no bad words!" })
	}

	try {
		const user = await signUp(email, password)

		if (user.user) {
			user.user.updateProfile({ displayName }).then(() => res.status(200).json({ success: true }))
		}
	} catch (err: any) {
		res.status(400).json({ error: true, message: err.message })
	}
})

export default handler
