import users from '@/data/user_list';
import User, { UserRole } from '@/types/user';
import { revalidatePath } from 'next/cache';

const localUsers: User[] = users as User[];

const userTypeGuard = (data: object): data is User[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        'userName' in item &&
        'userPhone' in item &&
        'userEmail' in item &&
        'userRole' in item &&
        'createdAt' in item
    )
  );
};

const getUsers = (role: UserRole) => {
  if (!userTypeGuard(localUsers)) {
    throw new Error('Invalid user data');
  }
  if (role === 'Admin') {
    return localUsers;
  } else if (role === 'PrimeUser') {
    return localUsers.filter((user) => user.userRole === 'PrimeUser');
  } else if (role === 'RegularUser') {
    return localUsers.filter((user) => user.userRole === 'RegularUser');
  } else if (role === 'Viewer') {
    return localUsers.filter((user) => user.userRole === 'Viewer');
  }

  throw new Error('Invalid role');
};

const getUserNames = () => {
  return localUsers.map((user) => user.userName);
};

const getUser = (query: {
  type: 'userName' | 'userPhone' | 'userEmail';
  value: string;
}) => {
  if (!userTypeGuard(localUsers)) {
    throw new Error('Invalid user data');
  }
  const user = localUsers.find((user) => user[query.type] === query.value);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const isUniqueEmail = (email: string) => {
  return !localUsers.some((user) => user.userEmail === email);
};

const createUser = async (formData: FormData) => {
  'use server';
  const userFormData = Object.fromEntries(formData) as Pick<
    User,
    'userName' | 'userEmail' | 'userRole' | 'userPhone'
  >;

  if (!isUniqueEmail(userFormData.userEmail)) {
    throw new Error('이미 존재하는 이메일입니다');
  }

  const user: User = {
    ...userFormData,
    createdAt: new Date().toISOString(),
    lastLoggedInAt: '',
  };

  localUsers.push(user);
  revalidatePath('/user');
};

export { getUsers, getUserNames, getUser, createUser };
