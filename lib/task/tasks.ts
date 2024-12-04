import tasks from '@/data/task_list';
import Task from '@/types/task';
import { UserRole } from '@/types/user';
import { revalidatePath } from 'next/cache';

const localTasks: Task[] = tasks as Task[];

export const getTasks = (role: UserRole): Task[] => {
  if (role === 'Admin' || role === 'PrimeUser') {
    return localTasks as Task[];

    // TODO: 레귤러 유저와 뷰어의 경우 자신의 이름으로 필터링 되도록 수정예정
  } else if (role === 'RegularUser') {
    return localTasks.filter(
      (task) => task.reporter === 'BrandonBrown'
    ) as Task[];
  } else if (role === 'Viewer') {
    return localTasks.filter(
      (task) => task.assignee === 'BrandonBrown'
    ) as Task[];
  }

  // role이 인자로 잘못 들어올 경우(ts여서 그럴 일 없지만) 에러 발생
  throw new Error('Invalid role');
};
export const createTask = async (taskFormData: FormData) => {
  'use server';
  const task = Object.fromEntries(taskFormData) as Task;
  localTasks.push(task as unknown as Task);
  revalidatePath('/task');
};
