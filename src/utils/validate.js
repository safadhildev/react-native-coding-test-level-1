import _ from 'lodash';

export const validateName = (str) => {
  if (_.isEmpty(str)) return "Name can't be empty";
  if (!/^[a-zA-Z]+$/.test(str)) return 'Name must contain letters only';
  if (str.length > 50) return "Name can't be more than 50 characters";
  return null;
};

export const validateEmail = (str) => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
    return 'Please enter a valid email address';
  }
  return null;
};
