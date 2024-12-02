import tasks from '@/data/task_list.json';
import Task from '@/types/task';
import { UserRole } from '@/types/user';

export const getTasks = (role: UserRole): Task[] => {
  if (role === 'Admin' || role === 'PrimeUser') {
    return tasks as Task[];

    // TODO: 레귤러 유저와 뷰어의 경우 자신의 이름으로 필터링 되도록 수정예정
  } else if (role === 'RegularUser') {
    return tasks.filter(
      (task) => task.reporter === 'BrandonBrown'
    ) as Task[];
  } else if (role === 'Viewer') {
    return tasks.filter(
      (task) => task.assignee === 'BrandonBrown'
    ) as Task[];
  }

  // role이 인자로 잘못 들어올 경우(ts여서 그럴 일 없지만) 에러 발생
  throw new Error('Invalid role');
};
