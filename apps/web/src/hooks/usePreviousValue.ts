import { useEffect, useRef } from "react"

/** Need to keep a value from the previous render around for some reason? Use this hook. */
export const usePreviousValue = (value: any) => {
	const ref = useRef()

	useEffect(() => {
		ref.current = value || null
	}, [value])

	return ref.current
}
