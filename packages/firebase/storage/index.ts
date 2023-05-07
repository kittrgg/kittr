import { getStorage } from "firebase/storage";

export * from "./delete";
export * from "./download";
export * from "./upload";
export * from "./uploadWithHandlers";

const isTest = process.env.NODE_ENV === "test";

export const storage = !isTest ? getStorage() : null;
