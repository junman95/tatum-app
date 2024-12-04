import FormField from '../common/form/FormField';
import User from '@/types/user';

type Props = {
  name: keyof User;
  label: string;
  placeholder?: string;
  matcher?: { fn: (value: string) => boolean; description: string };
  type?: 'text' | 'email';
};

const UserFormField = ({
  name,
  label,
  placeholder,
  matcher,
  type = 'text',
}: Props) => {
  return (
    <FormField
      label={label}
      name={name}
      placeholder={placeholder || `${label}을 입력하세요`}
      customMatch={matcher}
      type={type}
    />
  );
};

export default UserFormField;
