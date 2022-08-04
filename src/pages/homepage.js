import React,{useState} from 'react';
import Navbar1 from '../components/Navbar';
import Typeformbar from '../components/typeformbar';
import Typeform from '../components/typeforms';

const Homepage = () => {
  const [show, setShow] = useState('grid');
  const [sortby, setSortby] = useState("dateCreated");
  return (
      <div >
        <Navbar1 />
        <Typeformbar show={show => setShow(show)} list={show} sortby={sort => setSortby(sort)} />
        <Typeform show={show} sortby={sortby}/>
      </div>
  );
}

export default Homepage;
