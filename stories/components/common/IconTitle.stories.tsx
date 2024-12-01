import IconTitle from '@/components/common/IconTitle';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Common/IconTitle',
  component: IconTitle,
} satisfies Meta<typeof IconTitle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    image: {
      src: 'icons/enter.svg',
      alt: 'Enter',
    },
    title: 'Enter',
  },
} satisfies Story;
