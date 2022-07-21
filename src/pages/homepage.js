import React,{useState} from 'react';
import Navbar1 from '../components/Navbar';
import Typeformbar from '../components/typeformbar';
import Typeform from '../components/typeforms';

const Homepage = () => {
  const [show, setShow] = useState('grid');
  return (
      <div >
        <Navbar1 />
        <Typeformbar show={show => setShow(show)} />
        <Typeform show={show}/>
      </div>
  );
}

export default Homepage;
