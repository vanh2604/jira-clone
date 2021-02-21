import React, { useRef } from 'react';

const Signup = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const onFocus1 = () => {
    inputRef1.current.classList.add('focus');
  };
  const onFocus2 = () => {
    inputRef2.current.classList.add('focus');
  };
  const onFocus3 = () => {
    inputRef3.current.classList.add('focus');
  };
  const onFocus4 = () => {
    inputRef4.current.classList.add('focus');
  };
  return (
    <div>
      <div className="login">
        <img className="wave" src="img/wave.png" alt="" />
        <div className="container">
          <div className="img">
            <img src="./img/bg.svg" alt="" />
          </div>
          <div className="login-content">
            <form>
              <img src="img/avatar.svg" alt="" />
              <h2 className="title">Sign Up CYBERBUGS</h2>
              <div ref={inputRef1} className="input-div one">
                <div className="i">
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <h5>Name</h5>
                  <input onClick={onFocus1} type="password" className="input" />
                </div>
              </div>
              <div ref={inputRef2} className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input
                    onClick={onFocus2}
                    type="text"
                    className="input"
                    name="email"
                  />
                </div>
              </div>
              <div ref={inputRef3} className="input-div one">
                <div className="i">
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <h5>phone number</h5>
                  <input onClick={onFocus3} type="text" className="input" />
                </div>
              </div>
              <div ref={inputRef4} className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input
                    onClick={onFocus4}
                    type="password"
                    className="input"
                    name="password"
                  />
                </div>
              </div>
              <input type="submit" className="btn" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
