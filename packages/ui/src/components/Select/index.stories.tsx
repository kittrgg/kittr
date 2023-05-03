import type { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import { Select } from '.';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Select>;

export const Default = (args: any) => (
  <Select
    {...args}
    data={[
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'vue', label: 'Vue' },
    ]}
  />
);
