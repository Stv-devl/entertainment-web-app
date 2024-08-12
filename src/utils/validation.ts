/**
 * Validates a username to ensure it meets the criteria of 4-16 characters,
 * including letters, numbers, underscores, or hyphens.
 * @param {string} username - The username to validate.
 * @returns {boolean} True if the username is valid, false otherwise.
 */
export const validateUsername = (username: string): boolean => {
  const regex = /^[a-zA-Z0-9_-]{4,16}$/;

  return regex.test(username);
};

/**
 * Validates an email address format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
/**
 * Validates a password to ensure it is at least 4 characters long.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password is valid, false otherwise.
 */
export const validatePassword = (password: string): boolean => {
  const regex = /^.{4,}$/;
  return regex.test(password);
};

/**
 * Validates that the repeat password matches the original password.
 * @param {string} password - The original password.
 * @param {string} repeatPassword - The password entered for confirmation.
 * @returns {boolean} True if the passwords match, false otherwise.
 */
export const validateRepeatPassword = (
  password: string,
  repeatPassword: string
): boolean => {
  return password === repeatPassword;
};
