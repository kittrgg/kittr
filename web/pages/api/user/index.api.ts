import { createHandler } from "@Middlewares/createHandler"
import { signUp, updateUserDisplayName } from "@Services/firebase/auth"
import { badWordFilter } from "@Utils/helpers/badWordFilter"
import type { NextApiRequest, NextApiResponse } from "next"

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
			updateUserDisplayName(displayName).then(() => res.status(200).json({ success: true }))
		}
	} catch (err: any) {
		res.status(400).json({ error: true, message: err.message })
	}
})

export default handler
