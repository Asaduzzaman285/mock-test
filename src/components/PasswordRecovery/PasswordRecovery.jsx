import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import btoa from 'btoa';
import './PasswordRecovery.css'; // Optional external CSS

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [resetLink, setResetLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const expirationTime = Date.now() + 60000; 
    const tokenData = { email, exp: expirationTime };

    const token = window.btoa(JSON.stringify(tokenData));

    const link = `${window.location.origin}/reset-password?token=${token}`;

    setResetLink(link);
  };

  return (
    <div className="container recovery-container">
      <h2 className="text-center recovery-title">Password Recovery</h2>
      <form onSubmit={handleSubmit} className="recovery-form">
        <div className="mb-3">
          <label htmlFor="recoveryEmail" className="form-label">Email</label>
          <input
            id="recoveryEmail"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary mt-3 w-100">
          Recover Password
        </button>
      </form>
      {resetLink && (
        <div className="alert alert-info mt-3" role="alert">
          A password reset link has been generated (simulated):<br />
          <a href={resetLink}>{resetLink}</a>
          <br />
          Note: This link will expire in 60 seconds.
        </div>
      )}
    </div>
  );
};

export default PasswordRecovery;
