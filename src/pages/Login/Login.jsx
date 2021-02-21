import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { useFormik } from 'formik';
import styles from './login.module.css';
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
        inputRef2.current.classList.add(styles.error);
      } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
        inputRef2.current.classList.add(styles.error);
      } else {
        inputRef2.current.classList.remove(styles.error);
      }

      if (!values.email) {
        errors.email = 'Required';
        inputRef1.current.classList.add(styles.error);
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
        inputRef1.current.classList.add(styles.error);
      } else {
        inputRef1.current.classList.remove(styles.error);
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(userLoginAction(values));
    },
  });

  const onFocus1 = () => {
    inputRef1.current.classList.add(styles.focus);
  };
  const onFocus2 = () => {
    inputRef2.current.classList.add(styles.focus);
  };

  return (
    <div className={styles.Login}>
      <img className={styles.wave} src="img/wave.png" alt="" />
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="./img/bg.svg" alt="" />
        </div>
        <div className={styles.loginContent}>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <img src="img/avatar.svg" alt="" />
            <h2 className={styles.title}>LOGIN CYBERBUGSS</h2>
            <div ref={inputRef1} className={`${styles.inputDiv} ${styles.one}`}>
              <div className={styles.i}>
                <i className="fas fa-user" />
              </div>
              <div className={styles.div}>
                <h5>Email</h5>
                <input
                  onChange={formik.handleChange}
                  onClick={onFocus1}
                  type="text"
                  className={styles.input}
                  name="email"
                />
              </div>
            </div>
            <Text type="danger">{formik.errors.email}</Text>
            <div ref={inputRef2} className={`${styles.inputDiv} ${styles.one}`}>
              <div className={styles.i}>
                <i className="fas fa-lock" />
              </div>
              <div className={styles.div}>
                <h5>Password</h5>
                <input
                  onChange={formik.handleChange}
                  onClick={onFocus2}
                  type="password"
                  className={styles.input}
                  name="password"
                />
              </div>
            </div>
            <Text type="danger">{formik.errors.password}</Text>
            <Link to="/signup">Create a new account</Link>
            <input type="submit" className={styles.btn} value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
