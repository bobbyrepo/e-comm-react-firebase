export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email address";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
};

export const validateConfirmPassword = () => {
  if (!confirmPassword) return "Password is required";
  if (confirmPassword.length < 6)
    return "Password must be at least 6 characters";
  if (confirmPassword !== password) return "Passwords do not match";
  return "";
};

export const validateFirstName = (firstName) => {
  if (!firstName) return "First Name is required";
  return "";
};

export const validateLastName = (lastName) => {
  if (!lastName) return "Last Name is required";
  return "";
};

export const validateAddress = (address) => {
  if (!address) return "Address is required";
  return "";
};

export const validateContact = (contact) => {
  if (!contact) return "Contact Number is required";
  const contactRegex = /^[0-9]+$/;
  if (!contactRegex.test(contact)) return "Contact Number must be numeric";
  if (contact.length < 10 || contact.length > 15)
    return "Contact Number must be between 10 and 15 digits";
  return "";
};

export const validatePostal = (postal) => {
  if (!postal) return "Postal Code is required";
  const postalRegex = /^[0-9]+$/;
  if (!postalRegex.test(postal)) return "Postal Code must be numeric";
  return "";
};
