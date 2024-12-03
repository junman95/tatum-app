import Task from '@/types/task';
import FormField from '../common/form/FormField';

type Props = {
  name: keyof Task;
  label: string;
  placeholder?: string;
  matcher?: { fn: (value: string) => boolean; description: string };
};

const TaskFormField = ({ name, label, placeholder, matcher }: Props) => {
  return (
    <FormField
      label={label}
      name={name}
      placeholder={placeholder || `${label}을 입력하세요`}
      customMatch={matcher}
    />
  );
};

export default TaskFormField;
