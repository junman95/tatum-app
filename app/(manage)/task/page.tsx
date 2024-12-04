import Dropdown from '@/components/common/Dropdown';
import SearchInput from '@/components/common/SearchInput';
import CreationDialog from '@/components/create-dialog/CreationDialog';
import TaskForm from '@/components/create-dialog/TaskForm';
import ListTable from '@/components/list-view/ListTable';
import { getTasks } from '@/lib/task/tasks';
import { UserRole } from '@/types/user';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  const userRole = cookieStore.get('userRole');
  const tasks = getTasks((userRole?.value as UserRole) || 'RegularUser');

  return (
    <Flex
      direction="column"
      gap="2"
      align="start"
      className="relative  h-full w-full"
    >
      <Flex gap="5" className="relative">
        <Dropdown name="filterMenu" options={['Task Name', 'Assignee']} />
        <SearchInput name="searchTask" />
        <CreationDialog label="Create Task">
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
