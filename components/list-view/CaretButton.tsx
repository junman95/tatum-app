import { Text } from '@radix-ui/themes';
import Image from 'next/image';

type Props = {
  label?: string;
  onClick?: () => void; //사이드 이펙트 필요시 사용
  setSortStatus: (status: SortStatus) => void;
  sortStatus: SortStatus;
};

type SortStatus = 'asc' | 'desc' | 'none';

const caretIcons: Record<SortStatus, string> = {
  asc: 'icons/caret-sort-asc.svg',
  desc: 'icons/caret-sort-desc.svg',
  none: 'icons/caret-sort-none.svg',
};

const nextSortStatus: Record<SortStatus, SortStatus> = {
  asc: 'desc',
  desc: 'none',
  none: 'asc',
};

const CaretButton = ({
  label,
  onClick,
  setSortStatus,
  sortStatus,
}: Props) => {
  return (
    <button
      className="flex items-center justify-center"
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setSortStatus(nextSortStatus[sortStatus]);
      }}
    >
      {label && <Text>{label}</Text>}
      <Image
        src={caretIcons[sortStatus]}
        alt={sortStatus}
        width={20}
        height={20}
      />
    </button>
  );
};

export default CaretButton;
