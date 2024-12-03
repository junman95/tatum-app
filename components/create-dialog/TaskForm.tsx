import * as Form from '@radix-ui/react-form';
import TaskFormField from './TaskFormField';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import { getUserNames } from '@/lib/user/user';
import TaskDropdownField from './TaskDropdownField';
import { TaskTypeEnum } from '@/types/task';
import { validateDueDate } from '@/lib/util/validate';

// 오직 Dialog.Close만을 children으로 받는다.
type Props = {
  children: React.ReactElement<typeof Dialog.Close>;
};

const TaskForm = ({ children }: Props) => {
  const userNames = getUserNames();

  return (
    <Form.Root>
      <Flex direction="column" gap="4">
        <TaskFormField label="생성자" name="reporter" placeholder="박수철" />
        <TaskFormField label="Task Name" name="taskName" />
        <TaskFormField label="Task Description" name="taskDescription" />
        <TaskFormField
          label="Due Date"
          name="dueDate"
          matcher={{
            fn: validateDueDate,
            description: 'yyyy-mm-dd 형식에 맞춰 입력해 주세요',
          }}
        />
        <TaskDropdownField
          label="담당자 지정"
          name="assignee"
          options={userNames}
        />
        <TaskDropdownField
          label="Task Type"
          name="assignee"
          options={[TaskTypeEnum.물품배송, TaskTypeEnum.택배요청]}
        />

        <Flex justify="end" gap="2">
          {children}
          <Button type="submit">Create</Button>
        </Flex>
      </Flex>
    </Form.Root>
  );
};

export default TaskForm;
