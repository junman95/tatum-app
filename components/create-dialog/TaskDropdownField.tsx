import { getUsers } from '@/lib/user/user';
import Dropdown from '../common/Dropdown';
import Task from '@/types/task';
import FormField from '../common/form/FormField';

type Props = {
  label: string;
  name: keyof Task;
  options: string[];
};
const TaskDropdownField = ({ label, name, options }: Props) => {
  return (
    <FormField label={label} name={name}>
      <Dropdown name={name} options={options} />
    </FormField>
  );
};

export default TaskDropdownField;
