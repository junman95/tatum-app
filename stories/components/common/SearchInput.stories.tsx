import SearchInput from '@/components/common/SearchInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'searchUser',
  },
} satisfies Story;
