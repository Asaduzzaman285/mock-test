import React from 'react';

const Navbar = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/" className="logo">
                Edu Meeting
              </a>

              {/* Navigation Menu */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li><a href="/mocktest">MockTests</a></li>
                <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                <li className="has-sub">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="#upcoming-meet">Upcoming Meetings</a></li>
                    <li><a href="#details-meet">Meeting Details</a></li>
                  </ul>
                </li>
                <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
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
