import mongoose from "mongoose"

const dbMiddleWare = async (req: any, res: any, next: any) => {
	try {
		if (!(global as any).mongoose) {
			;(global as any).mongoose = mongoose.connect(process.env.DB_CONNECTION_STRING as string, {
				authSource: "admin"
			})
		}
	} catch (err) {
		console.error(err)
	}

	return next()
}

export default dbMiddleWare
