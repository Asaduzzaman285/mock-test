import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in from localStorage or session
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setIsLoggedIn(true);
      setUsername(userData.name || userData.email || 'User');
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/" className="logo">
                MockTest  
              </a>

              {/* Navigation Menu */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li><a href="/mocktest">MockTests</a></li>
                <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                
                {/* Authentication Links */}
                {isLoggedIn ? (
                  <li className="has-sub">
                    <a href="#">{username}</a>
                    <ul className="sub-menu">
                      <li><Link to="/profile">Profile</Link></li>
                      <li><Link to="/change-password">Change Password</Link></li>
                      <li><a href="#" onClick={handleLogout}>Logout</a></li>
                    </ul>
                  </li>
                ) : (
                  <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </>
                )}
              </ul>

              {/* Menu Trigger Button */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;