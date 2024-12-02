import ListTable from '@/components/list-view/ListTable';
import { getTasks } from '@/lib/task/tasks';
import { Flex } from '@radix-ui/themes';

export default function Page() {
  const tasks = getTasks('Admin');

  return (
    <Flex className="border-box overflow-hidden">
      {/** 필터 드랍다운메뉴 , 인풋 필드 추가  */}
      {/** 필터 체크박스 추가  */}
      <ListTable data={tasks} />
    </Flex>
  );
}
