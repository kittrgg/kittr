// IMPORTANT: ONLY TO BE USED IN TESTING AND DEV ENVIRONMENTS
// THEY CAN ONLY BE USED IN PROPERLY SET ENVIRONMENTS
// IF YOU ARE UNSURE OF HOW TO HANDLE THESE ENDPOINTS, DO NOT TOUCH THEM

const admin = require("firebase-admin")

const users = {
	anthony: {
		uid: "w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
		displayName: "anthony",
		email: "anthony@dev.com",
		password: "123123",
		emailVerified: true
	},
	fog: {
		uid: "VeoTKmMs72amUYzPRovBGJDJnGn1",
		displayName: "fog",
		email: "fog@dev.com",
		password: "123123",
		emailVerified: true
	},
	filod: {
		uid: "XnRFlNNbQ4d3K6nfEIRGBJm5nER2",
		displayName: "filod",
		email: "filod@dev.com",
		password: "123123",
		emailVerified: true
	},
	ringberg: {
		uid: "AnRFlNNbQ4d3K6nfEIRGBJm5nER3",
		displayName: "ringberg",
		email: "ringberg@dev.com",
		password: "123123",
		emailVerified: true
	}
}

if (!admin.apps.length) {
	console.log("Using admin in emulator mode.")
	admin.initializeApp({ projectId: "dev" })
}

const auth = admin.auth()

console.log("Seeding firebase emulators...")
auth
	.deleteUsers([
		"w5lMLvVLL3uJNRuoqSWvYjNIJ1GF",
		"VeoTKmMs72amUYzPRovBGJDJnGn1",
		"XnRFlNNbQ4d3K6nfEIRGBJm5nER2",
		"AnRFlNNbQ4d3K6nfEIRGBJm5nER3"
	])
	.then(async () => {
		try {
			await auth.createUser(users.anthony)
			await auth.createUser(users.fog)
			await auth.createUser(users.filod)
			await auth.createUser(users.ringberg)
		} catch (error) {
			console.error(error)
		}
	})

// Just here to satisy the module requirement
export {}
