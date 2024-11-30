import type { Meta, StoryObj } from '@storybook/react';
import Login from '@/app/login/page';
import Layout from '@/app/login/layout';

const meta = {
  title: 'Components/Login',
  component: Login,
  decorators: (Story) => (
    <Layout>
      <Story />
    </Layout>
  ),
} satisfies Meta<typeof Login>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
