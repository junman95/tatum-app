'use client';

import { Heading } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathname = usePathname();
  return (
    <Heading size="7">
      {pathname.replace('/', '').charAt(0).toUpperCase() +
        pathname.slice(2).concat(' List')}
    </Heading>
  );
};

export default PageTitle;
