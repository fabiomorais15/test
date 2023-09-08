import type { ComponentMeta, Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta={
    title: 'Example/Button',
    component: Button,
    onClick: { action: () => console.log('clicked') }, // Use a function definition here
    // ...
  } as Meta<typeof Button>;

  export default meta;

type Story = StoryObj<typeof meta>;

  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    text: 'Button',
    
    },
};
