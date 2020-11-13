import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import FlashMessage from './components/FlashMessage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import { UserLoginSignUp } from './template/UserLoginSignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <UserLoginSignUp exact path="/login" Component={Login} />
        <UserLoginSignUp exact path="/signup" Component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
