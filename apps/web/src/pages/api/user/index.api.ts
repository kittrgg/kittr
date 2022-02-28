import { NextServerPayload } from "@kittr/types/types"
import { createHandler } from "@Middlewares/createHandler"
import { signUp, updateUserDisplayName } from "@Services/firebase/auth"
import { badWordFilter } from "@Utils/helpers/badWordFilter"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = createHandler()

// Add a new user to Firebase Auth
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<{ success: boolean }>>) => {
	const { displayName, email, password } = req.body

	if (displayName.length > 26) {
		return res.status(400).json({ error: true, errorMessage: "That name is too long. 25 characters or less" })
	}

	if (badWordFilter(displayName)) {
		return res.status(400).json({ error: true, errorMessage: "Hey, no bad words!" })
	}

	try {
		const user = await signUp(email, password)

		if (user.user) {
			updateUserDisplayName(displayName).then(() => res.status(200).json({ success: true }))
		}

	} catch (err) {
		console.error(err)
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

export default handler
