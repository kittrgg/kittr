import {
	Accordion as MantineAccordion,
	AccordionProps as MantineAccordionProps
} from "@mantine/core"

export type AccordionProps = MantineAccordionProps

const Accordion = ({ children, ...rest }: AccordionProps) => (
	<MantineAccordion {...rest}>{children}</MantineAccordion>
)

Accordion.Item = MantineAccordion.Item
Accordion.Control = MantineAccordion.Control
Accordion.Panel = MantineAccordion.Panel

export { Accordion }
