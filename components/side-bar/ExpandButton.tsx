'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  id: string;
};

const ExpandButton = ({ id }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <button
      className="z-10 bg-teal-300 text-white absolute top-10 right-[-10px] rounded-full overflow-auto"
      onClick={() => {
        const sidebar = document.querySelector(`#${id}`);
        if (sidebar) {
          sidebar.classList.toggle('w-[120px]');
          sidebar.classList.toggle('w-[40px]');
          setIsExpanded((prev) => !prev);
        }
      }}
    >
      <Image
        className={`${isExpanded ? 'rotate-180' : ''}`}
        src="/icons/arrow-right.svg"
        width={20}
        height={20}
        alt="arrow"
      />
    </button>
  );
};

export default ExpandButton;
