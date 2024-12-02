'use client';
import { Flex, Heading } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  useEffect(() => {
    if (error.message === 'User not found') {
      new Promise(() => {
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      });
    }
    console.error(error);
  }, [error, router]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="h-svh"
      gap="6"
    >
      <Heading size="7">Error: {error.message}</Heading>
      <Heading size="5">2초 뒤 로그인 화면으로 이동합니다.</Heading>
    </Flex>
  );
}
