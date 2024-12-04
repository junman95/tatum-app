import { Box, Flex } from '@radix-ui/themes';
import Image from 'next/image';

type Props = {
  name: string;
};
const SearchInput = ({ name }: Props) => {
  return (
    <Box className="h-full border-2 rounded px-2">
      <Flex justify="between" align="center" className="h-full">
        <input
          type="text"
          placeholder="Search"
          name={name}
          required
          className="h-full focus:outline-none"
        />
        <button type="submit" className="h-full min-w-5">
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        </button>
      </Flex>
    </Box>
  );
};

export default SearchInput;
