import CaretButton from '@/components/list-view/CaretButton';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Components/ListView/CaretButton',
  component: CaretButton,
} satisfies Meta<typeof CaretButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'TaskName',
    setSortStatus: () => {},
    sortStatus: 'none',
    onClick: () => {
      console.log('clicked');
    },
  },
  render: (props) => {
    const [sortStatus, setSortStatus] = React.useState(props.sortStatus);
    return (
      <CaretButton
        sortStatus={sortStatus}
        setSortStatus={setSortStatus}
        label={props.label}
        onClick={props.onClick}
      />
    );
  },
} satisfies Story;
