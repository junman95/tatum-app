import * as Form from '@radix-ui/react-form';
import Dropdown from '../Dropdown';

type Props = {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
  customMatch?: { fn: (value: string) => boolean; description: string };
};

const FormDropdownField = ({
  name,
  label,
  options,
  required,
  customMatch,
}: Props) => {
  return (
    <Form.Field className="mb-2.5 grid" name="userEmail">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[13px] font-semibold leading-[25px]">
          {label}
        </Form.Label>
        <Form.Message
          className="text-[13px] font-semibold text-red-400 opacity-80"
          match="valueMissing"
        >
          {label}을/를 입력해 주세요
        </Form.Message>
        <Form.Message
          className="text-[13px] text-red-400 opacity-80"
          match="typeMismatch"
        >
          {label} 형식에 맞춰 입력해 주세요
        </Form.Message>

        {customMatch && (
          <Form.Message
            className="text-[13px] text-red-400 opacity-80"
            match={customMatch.fn}
          >
            {customMatch.description}
          </Form.Message>
        )}
      </div>
      <Form.Control asChild>
        <Dropdown name={name} options={options} />
      </Form.Control>
    </Form.Field>
  );
};

export default FormDropdownField;
