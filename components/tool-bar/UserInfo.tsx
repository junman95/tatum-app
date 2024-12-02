import { Flex, Text } from '@radix-ui/themes';
import { cookies } from 'next/headers';
import Image from 'next/image';

const UserInfo = async () => {
  const cookieStore = await cookies();
  const user = cookieStore.get('user');

  if (!user) {
    throw new Error('User not found');
  }
  return (
    <Flex align="center" gap="2">
      <Image src="/icons/user.svg" alt="user" height={20} width={20} />
      <Text aria-label="users">{user.value}</Text>
    </Flex>
  );
};

export default UserInfo;
