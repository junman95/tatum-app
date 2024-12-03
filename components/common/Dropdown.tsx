'use client';

import { Box, DropdownMenu } from '@radix-ui/themes';
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
        <Box className="w-full border-[1px] border-black p-2 rounded target:border-2">
          {selected}
        </Box>
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
