import type { Meta, StoryObj } from '@storybook/react';
import ManageLayout from '@/app/(manage)/layout';

const meta = {
  title: 'Layouts/ManageLayout',
  component: ManageLayout,
} satisfies Meta<typeof ManageLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: <div>Children</div>,
  },
} satisfies Story;
