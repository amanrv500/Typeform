import React, {useState} from 'react';
import Navbar1 from '../components/Navbar';
import Typeformbar from '../components/typeformbar';
import Typeform from '../components/typeforms';

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar1 />
        <Typeformbar />
        <Typeform />
      </div >
    </div>
  );
}


export default Homepage;
