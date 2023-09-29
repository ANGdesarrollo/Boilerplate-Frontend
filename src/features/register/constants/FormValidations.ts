export const fieldsToValidate = [
  {
    name: 'firstName',
    validations: [
      {
        type: 'required',
        message: 'First name is required.'
      },
      {
        type: 'minLength',
        value: 3,
        message: 'First name must be at least 3 characters long.'
      }
    ]
  },
  {
    name: 'lastName',
    validations: [
      {
        type: 'required',
        message: 'Last name is required.'
      }
    ]
  },
  {
    name: 'password',
    validations: [
      {
        type: 'required',
        message: 'Password is required.'
      },
      {
        type: 'minLength',
        value: 8,
        message: 'Password must be at least 8 characters long.'
      }
    ]
  }
];
