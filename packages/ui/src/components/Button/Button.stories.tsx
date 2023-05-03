import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from ".";

export default {
  title: 'Atom/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['default', 'filled', 'gradient', 'light', 'outline'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Gradient = Template.bind({});
Gradient.args = {
  variant: 'gradient',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
};
