import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import './Mocktest.css';
import MockTestList from '../MockTestList/MockTestList';

const Mocktest = () => {
  return (
    <div className="mocktest-page">
      <Navbar />
      {/* We're only using the MockTestList component as requested */}
      <MockTestList/>
    </div>
  );
};

export default Mocktest;