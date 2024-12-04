import * as Form from '@radix-ui/react-form';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import UserFormField from './UserFormField';
import { createUser } from '@/lib/user/user';

// 오직 Dialog.Close만을 children으로 받는다.
type Props = {
  children: React.ReactElement<typeof Dialog.Close>;
};

const UserForm = ({ children }: Props) => {
  return (
    <Form.Root action={createUser}>
      <Flex direction="column" gap="4">
        <UserFormField label="이름" name="userName" placeholder="박수철" />
        <UserFormField
          label="이메일"
          name="userEmail"
          placeholder="abc@google.com"
        />
        <UserFormField label="역할" name="userRole" />
        <UserFormField
          label="전화번호"
          name="userPhone"
          placeholder="000-0000-0000"
        />
      </Flex>
      <Flex justify="end" gap="2">
        {children}
        <Button type="submit">Create</Button>
      </Flex>
    </Form.Root>
  );
};

export default UserForm;
