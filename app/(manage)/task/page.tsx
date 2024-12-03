import Dropdown from '@/components/common/Dropdown';
import CreationDialog from '@/components/create-dialog/CreationDialog';
import TaskForm from '@/components/create-dialog/TaskForm';
import ListTable from '@/components/list-view/ListTable';
import { getTasks } from '@/lib/task/tasks';
import { Button, Dialog, Flex } from '@radix-ui/themes';

export default function Page() {
  const tasks = getTasks('Admin');

  return (
    <Flex
      direction="column"
      gap="5"
      align="start"
      className="border-box overflow-hidden h-full w-full"
    >
      <Flex gap="5">
        <Dropdown name="filterMenu" options={['1', '2']} />
        <CreationDialog>
          <TaskForm>
            <Dialog.Close>
              <Button>close</Button>
            </Dialog.Close>
          </TaskForm>
        </CreationDialog>
      </Flex>
      {/** 필터 체크박스 추가  */}
      <ListTable data={tasks} />
    </Flex>
  );
}
