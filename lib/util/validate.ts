'use server';
const validateDueDate = (value: unknown) => {
  if (typeof value !== 'string') {
    return false;
  }
  const date = new Date(value);
  return date && date.getTime() > Date.now();
};

const validatePhoneNumber = (value: unknown) => {
  if (typeof value !== 'string') {
    return false;
  }
  return !/^\d{3}-\d{4}-\d{4}$/.test(value);
};

export { validateDueDate, validatePhoneNumber };
