import Dropdown from '@/components/common/Dropdown';
import SearchInput from '@/components/common/SearchInput';
import CreationDialog from '@/components/create-dialog/CreationDialog';
import UserForm from '@/components/create-dialog/UserForm';
import ListTable from '@/components/list-view/ListTable';
import { getUsers } from '@/lib/user/user';
import { UserRole } from '@/types/user';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import { cookies } from 'next/headers';

const page = async () => {
  const cookieStore = await cookies();
  const userRole = cookieStore.get('userRole')?.value as UserRole;
  const users = getUsers(userRole);
  return (
    <Flex
      direction="column"
      gap="2"
      align="start"
      className="relative  h-full w-full"
    >
      <Flex gap="5" className="relative">
        <Dropdown
          name="filterMenu"
          options={['User Name', 'User Email', 'User Phone']}
        />
        <SearchInput name="searchUser" />
        <CreationDialog label="Create User">
          <UserForm>
            <Dialog.Close>
              <Button>close</Button>
            </Dialog.Close>
          </UserForm>
        </CreationDialog>
      </Flex>
      {/** 필터 체크박스 추가  */}
      <ListTable data={users} />
    </Flex>
  );
};

export default page;
