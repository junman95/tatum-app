import ExpandButton from '@/components/side-bar/ExpandButton';
import PageTitle from '@/components/tool-bar/PageTitle';
import UserInfo from '@/components/tool-bar/UserInfo';
import { Box, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="absolute h-screen w-screen overflow-hidden">
      <Box
        id="side-bar"
        className="flex-shrink-0 relative bg-teal-500 w-[120px] transition-all pt-[70px]"
      >
        <ExpandButton id="side-bar" />
        <button className="border-box w-full h-[30px] pl-1 hover:bg-cyan-200">
          <Link href={'/task'}>
            <Flex
              gap="2"
              align="center"
              className="h-full text-white font-semibold"
            >
              <Image src="/icons/task.svg" alt="task" height={20} width={20} />
              <Text aria-label="tasks">tasks</Text>
            </Flex>
          </Link>
        </button>
        <button className="border-box w-full h-[30px] pl-1 hover:bg-cyan-200">
          <Link href={'/user'}>
            <Flex
              gap="2"
              align="center"
              className="h-full text-white font-semibold"
            >
              <Image src="/icons/user.svg" alt="user" height={20} width={20} />
              <Text aria-label="users">users</Text>
            </Flex>
          </Link>
        </button>
      </Box>
      <Flex className="relative grow h-full p-5" gap="4" direction="column">
        <Flex justify="between" className="flex-shrink-0 h-10 bg-amber-400">
          <PageTitle />
          <UserInfo />
        </Flex>
        <Box className="relative h-full border-box bg-amber-500">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
