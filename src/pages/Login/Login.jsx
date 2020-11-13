import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { useFormik } from 'formik';
import '../../style.css';
import { message } from 'antd';
import { userLoginAction } from '../../store/actions/cyberBug.action';

const { Text } = Typography;

const Login = () => {
  const dispatch = useDispatch();

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.password) {
        errors.password = 'Required';
        inputRef2.current.classList.add('error');
      } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
        inputRef2.current.classList.add('error');
      } else {
        inputRef2.current.classList.remove('error');
      }

      if (!values.email) {
        errors.email = 'Required';
        inputRef1.current.classList.add('error');
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        console.log(errors.email);
        inputRef1.current.classList.add('error');
      } else {
        inputRef1.current.classList.remove('error');
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(userLoginAction(values));
    },
  });

  const onFocus1 = () => {
    inputRef1.current.classList.add('focus');
  };
  const onFocus2 = () => {
    inputRef2.current.classList.add('focus');
  };

  return (
    <div className="login">
      <img className="wave" src="img/wave.png" alt="" />
      <div className="container">
        <div className="img">
          <img src="./img/bg.svg" alt="" />
        </div>
        <div className="login-content">
          <form onSubmit={formik.handleSubmit}>
            <img src="img/avatar.svg" alt="" />
            <h2 className="title">LOGIN CYBERBUGSS</h2>
            <div ref={inputRef1} className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Email</h5>
                <input
                  onChange={formik.handleChange}
                  onClick={onFocus1}
                  type="text"
                  className="input"
                  name="email"
                />
              </div>
            </div>
            <Text type="danger">{formik.errors.email}</Text>
            <div ref={inputRef2} className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  onChange={formik.handleChange}
                  onClick={onFocus2}
                  type="password"
                  className="input"
                  name="password"
                />
              </div>
            </div>
            <Text type="danger">{formik.errors.password}</Text>
            <Link to="/signup">Create a new account</Link>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
