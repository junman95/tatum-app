import ListTable from '@/components/list-view/ListTable';
import type { Meta, StoryObj } from '@storybook/react';
import tasks from '@/data/task_list.json';
import Task from '@/types/task';

const meta = {
  title: 'Components/ListView/ListTable',
  component: ListTable,
} satisfies Meta<typeof ListTable>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { data: tasks as Task[] },
} satisfies Story;
