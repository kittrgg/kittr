import nextConnect from "next-connect"
import { withSentry } from "@sentry/nextjs"

export const createApiHandler = (...middleware: any[]) => {
	return withSentry(nextConnect().use(...middleware))
}
