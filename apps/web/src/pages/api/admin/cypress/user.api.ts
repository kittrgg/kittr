// IMPORTANT: THESE ENDPOINTS ARE ONLY TO BE USED IN TESTING
// THEY CAN ONLY BE USED IN PROPERLY SET ENVIRONMENTS
// IF YOU ARE UNSURE OF HOW TO HANDLE THESE ENDPOINTS, DO NOT TOUCH THEM

import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import admin from "@Services/firebase/admin"
import managersFixture from "@Utils/fixtures/managers.json"

const handler = createHandler()

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	if (process.env.NEXT_PUBLIC_ENABLE_SEEDING) {
		console.log("Seeding firebase emulators...")
		admin
			.deleteUsers([
				"w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
				"VeoTKmMs72amUYzPRovBGJDJnGn1",
				"XnRFlNNbQ4d3K6nfEIRGBJm5nER2",
				"AnRFlNNbQ4d3K6nfEIRGBJm5nER3",
				"BnRFlNNbQ4d3K6nfEIRGBJm5nER8"
			])
			.then(async () => {
				try {
					const user1 = await admin.createUser(managersFixture["w5lMLvVLL3uJNRuoqSWvYjNIJ1GF"])
					const user2 = await admin.createUser(managersFixture["VeoTKmMs72amUYzPRovBGJDJnGn1"])
					const user3 = await admin.createUser(managersFixture["XnRFlNNbQ4d3K6nfEIRGBJm5nER2"])
					const user4 = await admin.createUser(managersFixture["AnRFlNNbQ4d3K6nfEIRGBJm5nER3"])
					const user5 = await admin.createUser(managersFixture["BnRFlNNbQ4d3K6nfEIRGBJm5nER8"])

					if (user1 && user2 && user3 && user4 && user5) {
						console.log("Seeding firebase emulators...done")
						return res.status(200).json({ success: true })
					}
				} catch (error) {
					console.error(error)
					return res.status(500).json({ error })
				}
			})
	} else {
		return res.status(200).json({ message: "Inappropriate environment" })
	}
})

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	if (!process.env.NEXT_PUBLIC_ENABLE_SEEDING) {
		// Does something go here?
	} else {
		return res.status(200).json({ message: "Inappropriate environment" })
	}
})

export default handler
