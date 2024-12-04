import CreationDialog from '@/components/create-dialog/CreationDialog';
import TaskForm from '@/components/create-dialog/TaskForm';
import { Button, Dialog } from '@radix-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/CreateDialog/CreationDialog',
  component: CreationDialog,
  decorators: (Story) => (
    <div className="flex justify-center items-center h-screen">
      <Story />
    </div>
  ),
} satisfies Meta<typeof CreationDialog>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TaskFormDialog = {
  args: {
    label: 'Create Task',
    children: (
      <TaskForm>
        <Dialog.Close>
          <Button>close</Button>
        </Dialog.Close>
      </TaskForm>
    ),
  },
} satisfies Story;
