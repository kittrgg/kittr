/** Check that the code is being ran on a client, not a server. */
export const isClient = () => typeof window === "object"
