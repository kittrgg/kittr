export * from "./channel"
export * from "./game"
export * from "./kits"
export * from "./manager"
export * from "./popularity"
export * from "./game"
export * from "./twitch"
export * from "./types"

export type Booleanify<T> = {
	[P in keyof T]?: boolean
}

export type PrismaIncludes<T, K extends keyof T> = Pick<
	Required<Booleanify<T>>,
	K
>
