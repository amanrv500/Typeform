import React, {useState} from 'react';
import Navbar1 from '../components/Navbar';
import Typeformbar from '../components/typeformbar';
import Typeform from '../components/typeforms';
import Popup from '../components/popup';
import '../style/homepage.css'
import Editpopup from '../components/editpopup';


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
        <Navbar1 />
        <Typeformbar onclickaction={() => onclickaction()}/>
        <Typeform />
      </div >
      {/* <div className={pop ? 'popup' : 'popvis'}>
      <Popup />
      </div>
      <div>
        <Editpopup />
      </div> */}
    </div>
  );
}


export default Homepage;
