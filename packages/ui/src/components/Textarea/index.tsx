import { Textarea as MantineTextarea, TextareaProps } from "@mantine/core"

export const Textarea = (props: TextareaProps) => {
	return <MantineTextarea size="lg" radius="lg" {...props} />
}
