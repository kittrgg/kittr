import React from "react"

/** This is here to make sure that React gets put into the dist. */
console.log(React.version)

export * from "@mantine/core"
export * from "@mantine/dates"

export { OptionalInputLabel } from "./OptionalInputLabel"
export { RichTextEditor } from "./RichTextEditor"
export { Table } from "./Table"
export { Button } from "./Button"
export { DatePicker } from "./DatePicker"
export { DateRangePicker } from "./DateRangePicker"
export { Flexbox } from "./Flexbox"
export { Image } from "./Image"
export { NumberInput } from "./NumberInput"
export { RadioGroup, Radio } from "./RadioGroup"
export { Textarea } from "./Textarea"
export { TextInput } from "./TextInput"
export { TimeInput } from "./TimeInput"
export { Select } from "./Select"
import SVGLibrary from "./SVG"
export const SVG = SVGLibrary

/** Styling */

export { createInputStyles } from "./styles/createInputStyles"
export { theme } from "./styles/theme"
export { colors } from "./styles/colors"
