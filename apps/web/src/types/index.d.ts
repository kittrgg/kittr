export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
