import { Flex, Text } from '@radix-ui/themes';
import { cookies } from 'next/headers';
import Image from 'next/image';

const UserInfo = async () => {
  const cookieStore = await cookies();
  const userName = cookieStore.get('userName');
  const userRole = cookieStore.get('userRole');

  if (!userName || !userRole) {
    throw new Error('User not found');
  }
  return (
    <Flex align="center" gap="2" className="text-green-500 font-semibold">
      <Text aria-label="user-name">{userName.value}</Text>
      <Text aria-label="user-role">{userRole.value}</Text>

      <Image src="/icons/user.svg" alt="user" height={18} width={18} />
    </Flex>
  );
};

export default UserInfo;
