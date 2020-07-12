export const contactData = {
  firstName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'First name',
    },
    value: '',
    label: 'First name',
  },
  lastName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Last name',
    },
    value: '',
    label: 'Last name',
  },
  dateOfBirth: {
    elementType: 'input',
    elementConfig: {
      type: 'date',
      placeholder: 'Date of birth',
    },
    value: '',
    label: 'Date of birth',
  },
  phoneNumber: {
    elementType: 'input',
    elementConfig: {
      type: 'tel',
      placeholder: 'Phone number',
    },
    value: '',
    label: 'Phone number',
  },
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'E-mail',
    },
    value: '',
    label: 'Email',
  },
  address: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Address',
    },
    value: '',
    label: 'Address',
  },
};

export const editContactData = (props) => ({
  firstName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'First name',
    },
    value: props.firstName,
    label: 'First name',
  },
  lastName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Last name',
    },
    value: props.lastName,
    label: 'Last name',
  },
  dateOfBirth: {
    elementType: 'input',
    elementConfig: {
      type: 'date',
      placeholder: 'Date of birth',
    },
    value: props.dateOfBirth,
    label: 'Date of birth',
  },
  phoneNumber: {
    elementType: 'input',
    elementConfig: {
      type: 'tel',
      placeholder: 'Phone number',
    },
    value: props.phoneNum,
    label: 'Phone number',
  },
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'E-mail',
    },
    value: props.email,
    label: 'Email',
  },
  address: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Address',
    },
    value: props.address,
    label: 'Address',
  },
});
