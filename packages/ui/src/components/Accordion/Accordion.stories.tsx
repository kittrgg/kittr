import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from ".";

export default {
  title: 'Molecule/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion sx={{ width: '75%' }} {...args} />
);

export const Default = Template.bind({});

Default.args = {};
