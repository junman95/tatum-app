import ExpandButton from '@/components/side-bar/ExpandButton';
import { Box, Flex } from '@radix-ui/themes';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex className="absolute h-screen w-screen overflow-hidden">
      <Box
        id="side-bar"
        className="flex-shrink-0 relative bg-teal-500 w-[120px] transition-all"
      >
        <ExpandButton id="side-bar" />
      </Box>
      <Flex className="relative grow h-full" direction="column">
        <Box className="flex-shrink-0 h-10 bg-amber-400">this</Box>
        <Box className="relative h-full border-box m-5 bg-amber-500">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
