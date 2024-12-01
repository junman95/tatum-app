enum TaskTypeEnum {
  택배요청 = '\ud0dd\ubc30\uc694\uccad',
  물품배송 = '\ubb3c\ud488\uad6c\ub9e4',
}

type TaskStatus = 'Done' | 'In Progress' | 'Delayed' | 'Created';

export type Task = {
  taskType: TaskTypeEnum;
  taskName: `Task ${number}`;
  taskDescription: string;
  assignee: string;
  reporter: string;
  status: TaskStatus;
  dueDate: string;
  createdAt: string;
  completedAt: string;
};

export default Task;
export { TaskTypeEnum };
export type { TaskStatus };
