import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Typeformbar from '../components/typeformbar';
import Typeform from '../components/typeforms';
import Popup from '../components/popup';
import '../style/homepage.css'


const Homepage = () => {
  const [isBlur, setisBlur] = useState(true);
  const [pop, setpop] = useState(true);

  const onclickaction = () => {
    setisBlur(!isBlur);
    setpop(!pop)
  }


  return (
    <div className='Home-page'>
      <div className={isBlur ? 'unblur' : 'blur'}>
        <Navbar />
        <Typeformbar onclickaction={() => onclickaction()}/>
        <Typeform />
      </div >
      <div className={pop ? 'popup' : 'popvis'}>
      <Popup />
      </div>
    
    </div>
  );
}


export default Homepage;
