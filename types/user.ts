type UserRole = 'Admin' | 'RegularUser' | 'Viewer' | 'PrimeUser';

type User = {
  userName: string;
  userPhone: `+${number} ${number}-${number}-${number}`;
  userEmail: `${string}@${string}.${string}`;
  userRole: UserRole;
  createdAt: string;
  lastLoggedInAt: string;
};

export default User;
export type { UserRole };
