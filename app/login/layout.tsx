import { Box, Flex } from '@radix-ui/themes';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="bg-slate-500 h-svh">
      <Flex align="center" justify="center" className="h-full">
        {children}
      </Flex>
    </Box>
  );
}
