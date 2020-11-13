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
        <img class="wave" src="img/wave.png" alt="" />
        <div class="container">
          <div class="img">
            <img src="./img/bg.svg" alt="" />
          </div>
          <div class="login-content">
            <form>
              <img src="img/avatar.svg" alt="" />
              <h2 class="title">Sign Up CYBERBUGS</h2>
              <div ref={inputRef1} class="input-div one">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <h5>Name</h5>
                  <input onClick={onFocus1} type="password" class="input" />
                </div>
              </div>
              <div ref={inputRef2} class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Email</h5>
                  <input onClick={onFocus2} type="text" class="input" name="email" />
                </div>
              </div>
              <div ref={inputRef3} class="input-div one">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <h5>phone number</h5>
                  <input onClick={onFocus3} type="text" class="input" />
                </div>
              </div>
              <div ref={inputRef4} class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <h5>Password</h5>
                  <input
                    onClick={onFocus4}
                    type="password"
                    class="input"
                    name="password"
                  />
                </div>
              </div>
              <input type="submit" class="btn" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
