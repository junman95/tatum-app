import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';

const NotFound = () => {
  return (
    <Flex id="error" align="center" justify="center" className="h-svh">
      <Heading size="7">요청하신 페이지는 없는 페이지 입니다.</Heading>
    </Flex>
  );
};

export default NotFound;
