import React from "react"
import { Flexbox } from "./Flexbox"
import { ReactNode } from "react"

/** This component contains an optional tag on the right side of the label. */
export const OptionalInputLabel = ({ children }: { children: ReactNode }) => {
	return (
		<Flexbox
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			styles={{ root: { padding: 0 } }}
		>
			<span>{children}</span>
			<span style={{ fontStyle: "italic", fontWeight: "400" }}>Optional</span>
		</Flexbox>
	)
}
