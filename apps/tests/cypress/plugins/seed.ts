import { prisma } from "@kittr/prisma"

export const basicUser = {
	urlSafeName: "thetestchannel-basic"
}

export const seedBasicUser = async () => {
	return prisma.channel.create({
		data: {
			displayName: basicUser.urlSafeName,
			urlSafeName: basicUser.urlSafeName,
			profile: {
				create: {}
			},
			managers: {
				create: {
					firebaseId: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
					role: "OWNER"
				}
			}
		}
	})
}

export const removeBasicUser = async () => {
	return prisma.channel
		.delete({
			where: {
				displayName: basicUser.urlSafeName
			}
		})
		.catch()
}

export const premiumUser = {
	urlSafeName: "thetestchannel-premium"
}

export const seedPremiumUser = async () => {
	return prisma.channel.create({
		data: {
			displayName: premiumUser.urlSafeName,
			urlSafeName: premiumUser.urlSafeName,
			profile: {
				create: {}
			},
			plan: {
				create: {
					type: "PREMIUM"
				}
			},
			overlay: {
				create: {}
			},
			managers: {
				create: {
					firebaseId: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
					role: "OWNER"
				}
			},
			warzoneKits: {
				create: {
					base: {
						connect: {
							id: "60df4a4fbf84855a680f88f2"
						}
					},
					game: {
						connect: {
							id: "60da97598821ed46dc9c008c" // Warzone Game ID
						}
					}
				}
			}
		}
	})
}

export const removePremiumUser = async () => {
	return prisma.channel
		.delete({
			where: {
				displayName: premiumUser.urlSafeName
			}
		})
		.catch()
}
