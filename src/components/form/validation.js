const onlyLettersCheck = (string) => {
  return /^[a-z]+$/i.test(string);
};

const onlyNumbersCheck = (number) => {
  return /^[0-9]*$/.test(number) && number !== '';
};

const emailValidation = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const checkValidation = (newContact) => {
  let errorMessage = '';

  if (!onlyLettersCheck(newContact.firstName) || newContact.firstName === '') {
    errorMessage = 'Enter first name (only letters allowed)';
  } else if (
    !onlyLettersCheck(newContact.lastName) ||
    newContact.lastName === ''
  ) {
    errorMessage = 'Enter last name (only letters allowed)';
  } else if (newContact.dateOfBirth === '') {
    errorMessage = 'Select date of birth';
  } else if (
    !onlyNumbersCheck(newContact.phoneNum) ||
    newContact.phoneNum === ''
  ) {
    errorMessage = 'Invalid phone number (only numbers allowed)';
  } else if (!emailValidation(newContact.email) || newContact.email === '') {
    errorMessage = 'Invalid email';
  }
  return errorMessage;
};
