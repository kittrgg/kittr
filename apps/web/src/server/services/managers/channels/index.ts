import { prisma } from "@kittr/prisma"
import { captureMessage } from '@sentry/nextjs'

export const listChannels = (managerFirebaseUid: string) => {

	const result = prisma.channel.findMany({
		where: {
			managers: {
				some: {
					firebaseId: managerFirebaseUid
				}
			}
		},
		include: {
			profile: true,
			managers: true
		}
	})

	captureMessage(`${JSON.stringify(result)} found for firebaseUid: ${managerFirebaseUid}`)

	return result
}
