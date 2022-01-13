import mongoose from "mongoose"

const dbMiddleWare = async (req, res, next) => {
	try {
		if (!global.mongoose) {
			global.mongoose = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
				dbName: "myFirstDatabase",
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
		}
	} catch (err) {
		console.error(err)
	}

	return next()
}

export default dbMiddleWare
