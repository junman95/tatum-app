'use client';
import { Flex, Heading } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }, []);

  return (
    <Flex
      direction="column"
      gap="2"
      align="center"
      justify="center"
      className="h-svh"
    >
      <Heading size="6">
        안녕하세요. 최준만 - 과제 전형 배포 사이트 입니다.
      </Heading>
      <Heading size="5">2초 뒤 login 페이지로 이동합니다.</Heading>
    </Flex>
  );
}
