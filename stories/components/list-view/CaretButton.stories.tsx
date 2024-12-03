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
    orderStatus: 'asc',
    label: 'TaskName',
    onClick: () => {
      console.log('clicked');
    },
  },
  render: (props) => {
    const [orderStatus, setOrderStatus] = React.useState(props.orderStatus);
    return (
      <CaretButton
        orderStatus={orderStatus}
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
          setOrderStatus(orderStatus === 'asc' ? 'desc' : 'asc');
        }}
        label={props.label}
      />
    );
  },
} satisfies Story;
