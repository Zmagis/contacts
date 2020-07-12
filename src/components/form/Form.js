import React, { useState } from 'react';

import { contactData } from './formData';
import Input from './Input';
import { checkValidation } from './validation';

const Form = ({ showForm, contacts, setContacts }) => {
  const [formData, setFormData] = useState(contactData);
  const [error, setError] = useState('');

  const changeHandler = (e, identifier) => {
    const updatedFormData = { ...formData };
    const updatedFormElement = { ...updatedFormData[identifier] };
    updatedFormElement.value = e.target.value;
    updatedFormData[identifier] = updatedFormElement;
    setFormData(updatedFormData);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newContact = {
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      dateOfBirth: formData.dateOfBirth.value,
      phoneNum: formData.phoneNumber.value,
      email: formData.email.value,
      address: formData.address.value,
    };

    if (newContactIsValid(newContact)) {
      const data = [...contacts, newContact];
      setContacts(data);
      localStorage.setItem('contacts', JSON.stringify(data));
      showForm(false);
    }
  };

  const newContactIsValid = (newContact) => {
    if (contacts.length >= 1) {
      return checkValidation(newContact) === ''
        ? uniqueEmailPhone(newContact, contacts)
        : setError(checkValidation(newContact));
    } else {
      return checkValidation(newContact) === ''
        ? true
        : setError(checkValidation(newContact));
    }
  };

  const uniqueEmailPhone = (newC, allC) => {
    for (let i = 0; i <= allC.length; i++) {
      if (allC[i].phoneNum === newC.phoneNum) {
        setError('phone number already exist');
        return false;
      } else if (allC[i].email === newC.email) {
        setError('email already exist');
        return false;
      } else {
        setError('');
        return true;
      }
    }
  };

  const formElementArray = [];
  for (let key in formData) {
    formElementArray.push({ id: key, config: formData[key] });
  }

  return (
    <form>
      {formElementArray.map((el) => (
        <Input
          key={el.id}
          type={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          value={el.config.value}
          label={el.config.label}
          changeHandler={(e) => changeHandler(e, el.id)}
        />
      ))}
      <button type="submit" onClick={submitHandler}>
        ADD
      </button>
      {error !== '' ? <p className="error">{error}</p> : null}
    </form>
  );
};

export default Form;
