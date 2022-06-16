import admin from "firebase-admin"
import { TRPCError } from "@trpc/server"

export const getUserByEmail = async (email: string) => {
	const user = await admin.auth().getUserByEmail(email)

	if (!user) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: "Couldn't find user with that email."
		})
	}

	return user
}
