import React from "react"

/** Components */
import { OptionalInputLabel as uiOptionalInputLabel } from "./OptionalInputLabel"
import { RichTextEditor as uiRichTextEditor } from "./RichTextEditor"
import { Table as uiTable } from "./Table"
import { Button as uiButton } from "./Button"
import { DatePicker as uiDatePicker } from "./DatePicker"
import { DateRangePicker as uiDateRangePicker } from "./DateRangePicker"
import { Flexbox as uiFlexbox } from "./Flexbox"
import { Image as uiImage } from "./Image"
import { NumberInput as uiNumberInput } from "./NumberInput"
import { RadioGroup as uiRadioGroup, Radio as uiRadio } from "./RadioGroup"
import { Textarea as uiTextarea } from "./Textarea"
import { TextInput as uiTextInput } from "./TextInput"
import { TimeInput as uiTimeInput } from "./TimeInput"
import { Select as uiSelect } from "./Select"
import SVGLibrary from "./SVG"
const uiSVG = SVGLibrary

/** Theme provider. */
import {
	MantineProvider,
	Props as MantineProviderProps
} from "./MantineProvider"
export const ComponentsProvider = MantineProvider as (
	// eslint-disable-next-line
	props: MantineProviderProps
) => JSX.Element

// TODO: Get rid of this!
// eslint-disable-next-line
const withMantine = (Component: any) => (props: any) => {
	return (
		<MantineProvider>
			<Component {...props} />
		</MantineProvider>
	)
}

/** Components to be wrapped. We are doing this so that the Mantine hooks are available within these components. */
const components = {
	OptionalInputLabel: withMantine(uiOptionalInputLabel),
	RichTextEditor: withMantine(uiRichTextEditor),
	Table: withMantine(uiTable),
	Button: withMantine(uiButton),
	DatePicker: withMantine(uiDatePicker),
	DateRangePicker: withMantine(uiDateRangePicker),
	Flexbox: withMantine(uiFlexbox),
	Image: withMantine(uiImage),
	NumberInput: withMantine(uiNumberInput),
	RadioGroup: withMantine(uiRadioGroup),
	Radio: withMantine(uiRadio),
	Textarea: withMantine(uiTextarea),
	TextInput: withMantine(uiTextInput),
	TimeInput: withMantine(uiTimeInput),
	Select: withMantine(uiSelect),
	SVG: uiSVG
}

export const OptionalInputLabel = components.OptionalInputLabel
export const RichTextEditor = components.RichTextEditor
export const Table = components.Table
export const Button = components.Button
export const DatePicker = components.DatePicker
export const DateRangePicker = components.DateRangePicker
export const Flexbox = components.Flexbox
export const Image = components.Image
export const NumberInput = components.NumberInput
export const RadioGroup = components.RadioGroup
export const Radio = components.Radio
export const Textarea = components.Textarea
export const TextInput = components.TextInput
export const TimeInput = components.TimeInput
export const Select = components.Select
export const SVG = components.SVG

export * from "@mantine/core"
export * from "@mantine/dates"
/** Styling */

export { createInputStyles } from "./styles/createInputStyles"
export { theme } from "./styles/theme"
export { colors } from "./styles/colors"
