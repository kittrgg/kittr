/** Check that some web api is supported in the environment which a code is being ran. */
export const isWebApiSupported = (api: string) => (typeof window !== "undefined" ? api in window : false)
