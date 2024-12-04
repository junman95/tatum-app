'use client';
import { Flex, Heading } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

enum CommonError {
  Default = 'Default',
  UserNotFound = 'User not found',
}

const getErrorMessage = (error: Error) => {
  const errorMessages = {
    [CommonError.Default]: {
      title: `에러 발생: ${error.message}`,
      message: '2초 뒤 로그인 화면으로 이동합니다.',
    },
    [CommonError.UserNotFound]: {
      title: '가입되지 않은 이메일 입니다. 확인해 주세요.',
      message: '2초 뒤 로그인 화면으로 이동합니다.',
    },
  };

  return (
    errorMessages[error.message as CommonError] ||
    errorMessages[CommonError.Default]
  );
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  const { title, message } = getErrorMessage(error);
  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    });
  }, [error, router]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="h-svh"
      gap="6"
    >
      <Heading size="7">{title}</Heading>
      <Heading size="5">{message}</Heading>
    </Flex>
  );
}
