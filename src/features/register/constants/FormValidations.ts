export const validationUsername = {
  required: {
    value: true,
    message: 'Name is required'
  },
  minLength: {
    value: 5,
    message: 'Minimum of characters are 5'
  },
  maxLength: {
    value: 20,
    message: 'Maximum characters are 50'
  }
};

export const validationPassword = {
  required: {
    value: true,
    message: 'Password is required'
  },
  minLength: {
    value: 5,
    message: 'Minimum of characters are 8'
  },
  maxLength: {
    value: 20,
    message: 'Maximum characters are 100'
  }
};
