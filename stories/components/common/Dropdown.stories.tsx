import Dropdown from '@/components/common/Dropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Common/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'dropdown',
    options: ['option1', 'option2', 'option3'],
  },
} satisfies Story;
