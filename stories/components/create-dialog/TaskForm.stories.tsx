import TaskForm from '@/components/create-dialog/TaskForm';
import { Button } from '@radix-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/CreateDialog/TaskForm',
  component: TaskForm,
} satisfies Meta<typeof TaskForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: <Button>Close</Button>,
  },
} satisfies Story;
