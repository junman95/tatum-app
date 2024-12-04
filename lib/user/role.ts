'use server';

const checkRole = (role: string) => {
  return !['Admin', 'PrimeUser', 'RegularUser', 'Viewer'].includes(role);
};

export { checkRole };
