'use client';

import { Box, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  name: string;
  options: string[];
};

const Dropdown = ({ name, options }: Props) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger name={name}>
        <Flex
          gap="2"
          justify="between"
          className="w-full min-w-[150px] h-full border-[1px] border-black p-2 rounded target:border-2 cursor-pointer"
        >
          <Text>{selected}</Text>
          <Image
            src="/icons/caret-bottom.svg"
            alt="caret-bottom"
            height={20}
            width={20}
          />
        </Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {options.map((option) => (
          <DropdownMenu.Item key={option} onSelect={() => setSelected(option)}>
            {option}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
