import { getStorage } from "firebase/storage"

export * from "./delete"
export * from "./download"
export * from "./upload"
export * from "./uploadWithHandlers"

export const storage = getStorage()
