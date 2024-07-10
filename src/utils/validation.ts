export const validateUsername = (username: string): boolean => {
  const regex = /^[a-zA-Z0-9_-]{4,16}$/;
  return regex.test(username);
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string): boolean => {
  const regex = /^.{4,}$/;
  return regex.test(password);
};
