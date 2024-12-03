import IconTitle from '@/components/common/IconTitle';
import RoundBox from '@/components/common/RoundBox';
import login from '@/lib/user/action/login';
import * as Form from '@radix-ui/react-form';
import { Box, Button, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';

export default function Page() {
  return (
    <RoundBox>
      <IconTitle
        image={{ src: 'icons/enter.svg', alt: 'Enter' }}
        title="로그인"
      />
      <Form.Root action={login}>
        <Form.Field className="mb-2.5 grid" name="userEmail">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[13px] font-semibold leading-[25px]">
              이메일
            </Form.Label>
            <Form.Message
              className="text-[13px] font-semibold text-red-400 opacity-80"
              match="valueMissing"
            >
              이메일을 입력해 주세요
            </Form.Message>
            <Form.Message
              className="text-[13px] text-red-400 opacity-80"
              match="typeMismatch"
            >
              이메일 형식에 맞춰 입력해 주세요
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="email"
              id="email"
              name="userEmail"
              required
              placeholder="이메일 주소를 입력해 주세요."
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[13px] font-semibold leading-[25px]">
              비밀번호
            </Form.Label>
            <Form.Message
              className="text-[13px] font-semibold text-red-400 opacity-80"
              match="valueMissing"
            >
              비밀번호를 입력해 주세요
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="password"
              id="password"
              name="userPassword"
              required
              placeholder="비밀번호를 입력해 주세요."
            />
          </Form.Control>
        </Form.Field>
        <Flex gap={'2'} justify={'end'} className="w-full">
          <Button color="gray">Cancel</Button>
          <Form.Submit>
            <Button asChild>
              <Box>
                <Flex align="center" justify={'center'} gap={'2'}>
                  <Image
                    src="/icons/enter.svg"
                    alt="Enter"
                    width={12}
                    height={12}
                  />
                  <Text>Log-in</Text>
                </Flex>
              </Box>
            </Button>
          </Form.Submit>
        </Flex>
      </Form.Root>
    </RoundBox>
  );
}
