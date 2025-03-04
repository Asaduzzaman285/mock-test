import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Mocktest from './pages/Mocktest/Mocktest';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import Profile from './pages/Profile/Profile';
import ProfilePage from './pages/Profile/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/mocktest" element={<Mocktest />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  <Route path="/password-recovery" element={<PasswordRecovery />} />
  <Route path="/profile" element={<ProfilePage/>} />

      </Routes>
    </Router>
  );
};

export default App;
