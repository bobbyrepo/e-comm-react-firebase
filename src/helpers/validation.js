/**
 * Validates the email format.
 * @param {string} email - The email to validate.
 * @returns {string} Error message if the email is invalid, otherwise an empty string.
 */
export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email address";
  return "";
};

/**
 * Validates the password format.
 * @param {string} password - The password to validate.
 * @returns {string} Error message if the password is invalid, otherwise an empty string.
 */
export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
};

/**
 * Validates the confirm password format.
 * @param {string} confirmPassword - The confirm password to validate.
 * @param {string} password - The original password for confirmation.
 * @returns {string} Error message if the confirm password is invalid, otherwise an empty string.
 */
export const validateConfirmPassword = (confirmPassword, password) => {
  if (!confirmPassword) return "Password is required";
  if (confirmPassword.length < 6)
    return "Password must be at least 6 characters";
  if (confirmPassword !== password) return "Passwords do not match";
  return "";
};

/**
 * Validates the first name format.
 * @param {string} firstName - The first name to validate.
 * @returns {string} Error message if the first name is invalid, otherwise an empty string.
 */
export const validateFirstName = (firstName) => {
  if (!firstName) return "First Name is required";
  return "";
};

/**
 * Validates the last name format.
 * @param {string} lastName - The last name to validate.
 * @returns {string} Error message if the last name is invalid, otherwise an empty string.
 */
export const validateLastName = (lastName) => {
  if (!lastName) return "Last Name is required";
  return "";
};

/**
 * Validates the address format.
 * @param {string} address - The address to validate.
 * @returns {string} Error message if the address is invalid, otherwise an empty string.
 */
export const validateAddress = (address) => {
  if (!address) return "Address is required";
  return "";
};

/**
 * Validates the contact number format.
 * @param {string} contact - The contact number to validate.
 * @returns {string} Error message if the contact number is invalid, otherwise an empty string.
 */
export const validateContact = (contact) => {
  if (!contact) return "Contact Number is required";
  const contactRegex = /^[0-9]+$/;
  if (!contactRegex.test(contact)) return "Contact Number must be numeric";
  if (contact.length < 10 || contact.length > 15)
    return "Contact Number must be between 10 and 15 digits";
  return "";
};

/**
 * Validates the postal code format.
 * @param {string} postal - The postal code to validate.
 * @returns {string} Error message if the postal code is invalid, otherwise an empty string.
 */
export const validatePostal = (postal) => {
  if (!postal) return "Postal Code is required";
  const postalRegex = /^[0-9]+$/;
  if (!postalRegex.test(postal)) return "Postal Code must be numeric";
  return "";
};
