import { Box } from '@radix-ui/themes';

type Props = {
  children: React.ReactNode;
};
const RoundBox = ({ children }: Props) => {
  return <Box className="w-[300px] rounded bg-slate-50 p-5">{children}</Box>;
};

export default RoundBox;
