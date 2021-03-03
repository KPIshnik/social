export const required = (data) => {
  if (!data) return "required";
  return undefined;
};

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);
export const maxLength50 = maxLength(50);
