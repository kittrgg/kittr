import type { AccordionProps as MantineAccordionProps } from "@mantine/core";
import { Accordion as MantineAccordion } from "@mantine/core";

export type AccordionProps = MantineAccordionProps;

const Accordion = ({ children, ...rest }: AccordionProps) => (
  <MantineAccordion {...rest}>{children}</MantineAccordion>
);

Accordion.Item = MantineAccordion.Item;
Accordion.Control = MantineAccordion.Control;
Accordion.Panel = MantineAccordion.Panel;

export { Accordion };
