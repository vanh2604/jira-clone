/* eslint-disable import/prefer-default-export */
import { SIGN_IN_API } from '../../constant/type';

export const userLoginAction = (values) => ({
  type: SIGN_IN_API,
  userLogin: {
    email: values.email,
    password: values.password,
  },
});
