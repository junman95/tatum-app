import { OrderStatus } from '@/types/listView';

export const filterItemsByOrder = <T extends { [key: string]: string }>(
  data: T[],
  type: OrderStatus,
  key: string
) => {
  if (type === 'none') return data;

  return data.sort((a, b) => {
    if (type === 'asc') {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return a[key] < b[key] ? 1 : -1;
    }
  });
};
