import mongoose from "mongoose"

const MONGODB_URI = process.env.DB_CONNECTION_STRING

if (!MONGODB_URI) {
	throw new Error("Please define the DB_CONNECTION_STRING environment variable inside .env.local")
}

let cached = (global as any).mongoose

if (!cached) {
	cached = (global as any).mongoose = { conn: null, promise: null }
}

export const connectToDatabase = async () => {
	if (cached.conn) {
		return cached.conn
	}

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true })
			.then((mongoose) => {
				return mongoose
			})
	}
	cached.conn = await cached.promise
	return cached.conn
}
