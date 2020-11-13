import { SIGN_IN_API } from '../constant/Type';

export const userLoginAction = (values) => ({
  type: SIGN_IN_API,
  userLogin: {
    email: values.email,
    password: values.password,
  },
});
