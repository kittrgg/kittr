export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export type NonNullable<T> = Exclude<T, null | undefined>;
