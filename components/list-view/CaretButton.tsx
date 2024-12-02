'use client';

import { OrderStatus } from '@/types/listView';
import { Text } from '@radix-ui/themes';
import Image from 'next/image';

type Props = {
  label?: string;
  onClick?: () => void; //사이드 이펙트 필요시 사용
  orderStatus: OrderStatus;
};

const caretIcons: Record<OrderStatus, string> = {
  asc: '/icons/caret-sort-asc.svg',
  desc: '/icons/caret-sort-desc.svg',
  none: '/icons/caret-sort-none.svg',
};

const CaretButton = ({ label, onClick, orderStatus }: Props) => {
  return (
    <button
      className="flex items-center justify-center"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {label && <Text>{label}</Text>}
      <Image
        src={caretIcons[orderStatus]}
        alt={`${label}_${orderStatus}`}
        width={20}
        height={20}
      />
    </button>
  );
};

export default CaretButton;
