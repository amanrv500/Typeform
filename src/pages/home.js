import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Typeformbar from '../components/typeformbar';
import Typeform from '../components/typeforms';
import Popup from '../components/popup';


const Homepage = () => {
 
  // const onclickaction = () => {
  //   // let popup = document.getElementsByClassName('popup').style.visibility;
  //   // popup = "visible"
  //   // console.log("succesful")
  //   document.getElementsByTagName("popup").style.visibility = "visible";
  // };

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
