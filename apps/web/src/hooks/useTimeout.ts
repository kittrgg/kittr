/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback, useRef } from "react"

const defaultOptions = {
	cancelOnUnmount: true
}

/** Reactfully use a timeout. This hook will prevent memory leaks and other issues. */
export const useTimeout = (fn: (...args: any) => any, milliseconds: number, options = defaultOptions) => {
	const opts = { ...defaultOptions, ...(options || {}) }
	const timeout = useRef<any>()
	const callback = useRef(fn)
	const [isCleared, setIsCleared] = useState(false)

	const clear = useCallback(() => {
		if (timeout.current) {
			clearTimeout(timeout.current)
			setIsCleared(true)
		}
	}, [])

	useEffect(() => {
		if (typeof fn === "function") {
			callback.current = fn
		}
	}, [fn])

	useEffect(() => {
		if (typeof milliseconds === "number" && timeout.current) {
			timeout.current = setTimeout(() => {
				callback.current()
			}, milliseconds)
		}
		return clear
	}, [milliseconds, clear])

	useEffect(
		() => () => {
			if (opts.cancelOnUnmount) {
				clear()
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)

	return [isCleared, clear]
}
