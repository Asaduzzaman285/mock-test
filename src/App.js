import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Mocktest from './pages/Mocktest/Mocktest';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

// import Profile from './pages/Profile/Profile';
import ProfilePage from './pages/Profile/Profile';
import ForgotPass from './components/ForgotPassword/ForgotPass';
import Passcodeverify from './components/ForgetPassCodeVerify/Passcodeverify';
import Resetpassword from './components/ResetPassword/Resetpassword';


const App = () => {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/mocktest" element={<Mocktest />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/forget-password" element={<ForgotPass />} />
   <Route path="/passcodeverify" element={<Passcodeverify/>} />
  <Route path="/reset-password" element={<Resetpassword />} />
  <Route path="/profile" element={<ProfilePage/>} />

      </Routes>
    </Router>
  );
};

export default App;
