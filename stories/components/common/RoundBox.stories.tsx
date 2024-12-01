import RoundBox from '@/components/common/RoundBox';
import { Container } from '@radix-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Common/RoundBox',
  component: RoundBox,
  render: (Story) => (
    <Container className="h-svh bg-slate-500">
      <RoundBox>{Story.children}</RoundBox>
    </Container>
  ),
} satisfies Meta<typeof RoundBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: <div className="p-4">Default</div>,
  },
} satisfies Story;
