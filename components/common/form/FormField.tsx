import * as Form from '@radix-ui/react-form';

type Props = {
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  name: string;
  required?: boolean;
  customMatch?: { fn: (value: string) => boolean; description: string };
  children?: React.ReactNode;
};

const FormField = ({
  label,
  type = 'text',
  placeholder = '',
  name,
  required = true,
  customMatch,
  children,
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
        {children ? (
          children
        ) : (
          <input
            className="box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type={type}
            id={name}
            name={name}
            required={required}
            placeholder={placeholder}
          />
        )}
      </Form.Control>
    </Form.Field>
  );
};

export default FormField;
