import Home from '@/app/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/App',
  component: Home,
} satisfies Meta<typeof Home>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
