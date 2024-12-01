import { Table } from '@radix-ui/themes';
import CaretButton from './CaretButton';

type Props<T> = {
  data: T[];
};

const getColumnList = (data: { [key: string]: string }) => {
  return Object.keys(data);
};

const ListTable = <T extends { [key: string]: string }>({
  data,
}: Props<T>) => {
  const columns = getColumnList(data[0]);
  return (
    <Table.Root className="h-full">
      <Table.Header className="sticky top-0 bg-white">
        {columns.map((column) => (
          <Table.ColumnHeaderCell key={column}>
            <CaretButton
              sortStatus="asc"
              setSortStatus={() => {}} //TODO : 각 column별로 sort 기능 추가
              label={column}
            />
          </Table.ColumnHeaderCell>
        ))}
      </Table.Header>

      <Table.Body className="overflow-y-scroll">
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
