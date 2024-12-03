'use server';

import User from '@/types/user';
import { getUser } from '../user';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// 과제 요건상 pw는 아무 값이나 상관 없으므로 임의로 '1234'로 설정
const correctPassword = '1234';

const login = async (formData: FormData) => {
  const userEmail = formData.get('userEmail') as User['userEmail'];
  const userPassword = formData.get('userPassword') as string;

  console.log(userEmail, userPassword);

  if (userPassword !== correctPassword) {
    throw new Error('비밀번호를 확인해 주세요.');
  }
  try {
    const user = getUser({ type: 'userEmail', value: userEmail });
    console.log(user);
    const cookieStore = await cookies();

    // user 정보를 cookie에 저장(토큰이 없으므로 cookie에 저장)
    cookieStore.set('userEmail', user.userEmail);
    cookieStore.set('userName', user.userName);
    cookieStore.set('userRole', user.userRole);

    redirect('/task');
  } catch (error) {
    if (error === 'User not found') {
      throw new Error('가입되지 않은 이메일 입니다. 확인해 주세요.');
    } else {
      throw error;
    }
  }
};

export default login;
