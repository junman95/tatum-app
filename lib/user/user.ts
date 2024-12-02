import users from '@/data/user_list.json';
import User, { UserRole } from '@/types/user';

const userTypeGuard = (data: object): data is User[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        'userName' in item &&
        'userPhone' in item &&
        'userEmail' in item &&
        'userRole' in item &&
        'createdAt' in item &&
        'lastLoggedInAt' in item
    )
  );
};

const getUsers = (role: UserRole) => {
  if (!userTypeGuard(users)) {
    throw new Error('Invalid user data');
  }
  if (role === 'Admin') {
    return users;
  } else if (role === 'PrimeUser') {
    return users.filter((user) => user.userRole === 'PrimeUser');
  } else if (role === 'RegularUser') {
    return users.filter((user) => user.userRole === 'RegularUser');
  } else if (role === 'Viewer') {
    return users.filter((user) => user.userRole === 'Viewer');
  }

  throw new Error('Invalid role');
};

const getUser = (query: {
  type: 'userName' | 'userPhone' | 'userEmail';
  value: string;
}) => {
  if (!userTypeGuard(users)) {
    throw new Error('Invalid user data');
  }
  const user = users.find((user) => user[query.type] === query.value);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

export { getUsers, getUser };
