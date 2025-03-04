import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
   
  };

  const handleClick = () => {
    const token = formData.email ? btoa(formData.email) : btoa('user@example.com');
    navigate(`/reset-password?token=${token}`);
  };

  return (
    <div className="container login-container">
      <h2 className="text-center login-title">Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Log In
        </button>

        <button
          type="button"
          className="btn btn-secondary mt-3 w-100"
          onClick={handleClick}
        >
          Forget Password
        </button>
      </form>

      <div className="text-center mt-3">
        <p>
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
