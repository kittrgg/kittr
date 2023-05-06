import type { RefObject } from "react"
import { useRef } from "react"

export const useLatestRef = <T>(val: T): RefObject<T> => {
	const ref = useRef(val)
	ref.current = val
	return ref
}
