import {
	Accordion as MantineAccordion,
	AccordionItem,
	AccordionProps
} from "@mantine/core"
import React from "react"
import { Title } from "../Title"

type AccordionListItem = { title: string; content: React.ReactNode }

interface Props extends Omit<AccordionProps, "children"> {
	items: AccordionListItem[]
}

export const Accordion = ({ items, ...rest }: Props) => (
	<MantineAccordion iconPosition="right" {...rest}>
		{items.map((item) => (
			<AccordionItem
				style={{}}
				label={
					<Title order={3} preset="h4">
						{item.title}
					</Title>
				}
			>
				{item.content}
			</AccordionItem>
		))}
	</MantineAccordion>
)
