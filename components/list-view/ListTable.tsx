'use client';
import { Table } from '@radix-ui/themes';
import CaretButton from './CaretButton';
import { OrderStatus } from '@/types/listView';
import { filterItemsByOrder } from '@/lib/localFilter';
import { useState } from 'react';

type Props = {
  data: { [key in string]: string }[];
};

const getColumnList = (data: { [key: string]: string }) => {
  return Object.keys(data);
};

const nextSortStatus: Record<OrderStatus, OrderStatus> = {
  asc: 'desc',
  desc: 'none',
  none: 'asc',
};

const ListTable = ({ data }: Props) => {
  const columns = getColumnList(data[0]);
  const [listItems, setListItems] = useState(data);
  const [orderInfo, setOrderInfo] = useState<{
    selectedColumn: string;
    orderStatus: OrderStatus;
  }>({
    selectedColumn: '',
    orderStatus: 'none',
  });

  const filterItemsInOrder = (
    currentOrderStatus: OrderStatus,
    columnName: string
  ) => {
    setOrderInfo({
      selectedColumn: columnName,
      orderStatus: nextSortStatus[currentOrderStatus],
    });
    setListItems(
      filterItemsByOrder(
        listItems,
        nextSortStatus[currentOrderStatus],
        columnName
      )
    );
  };

  return (
    <Table.Root className="h-full w-full">
      <Table.Header className="sticky top-0 bg-white border-b-2 border-b-black">
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell key={column}>
              <CaretButton
                orderStatus={
                  orderInfo.selectedColumn === column
                    ? orderInfo.orderStatus
                    : 'none'
                }
                onClick={() =>
                  filterItemsInOrder(orderInfo.orderStatus, column)
                }
                label={column}
              />
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body className="overflow-scroll">
        {data.map((row, index) => (
          <Table.Row key={index}>
            {columns.map((column) => (
              <Table.Cell key={column}>{row[column]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ListTable;
