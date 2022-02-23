import type { NextApiRequest, NextApiResponse } from "next"
import auth from "@Services/firebase/admin"

export const userAuth = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
	let parsedBody = {}

	if (typeof req.body === "string" && req.body.length > 0) {
		parsedBody = JSON.parse(req.body)
	} else if (typeof req.body === "object") {
		parsedBody = req.body
	}

	const authorization = req.headers.authorization

	if (!authorization) return res.status(401).json({ message: "You must provide authentication to use this endpoint." })

	const token = authorization.split(" ")[1]

	auth
		.verifyIdToken(token)
		.then((decodedToken) => {
			req.body = { ...parsedBody, token: decodedToken }
			req.body = JSON.stringify(req.body)
			return next()
		})
		.catch((err) => {
			console.error(err)
			return res.status(401).json({ error: true, message: "Your authorization was not accepted." })
		})
}

export const adminAuth = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
	console.log("This is an admin route.")

	// const authorization = req.headers.authorization

	// if (!authorization) return res.status(401).json({ message: "You must provide authentication to use this endpoint." })

	// const token = authorization.split(" ")[1]

	// auth
	// 	.verifyIdToken(token)
	// 	.then((decodedToken) => {
	// 		return next()
	// 	})
	// 	.catch((err) => {
	// 		return res.status(401).json({ message: "Your authorization was not accepted." })
	// 	})

	// next()
}
