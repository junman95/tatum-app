'use server';
const validateDueDate = (value: unknown) => {
  if (typeof value !== 'string') {
    return false;
  }
  const date = new Date(value);
  return date && date.getTime() > Date.now();
};

export { validateDueDate };
