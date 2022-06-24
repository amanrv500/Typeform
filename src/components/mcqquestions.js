import React,{ useState, useEffect} from 'react'
import '../style/questions.css'
import axios from 'axios'
import { useParams,useLocation } from 'react-router-dom'


const Questions = () => {
    const param = useParams();
    const tid = param.id;

    const initialValues = {
        question: "",
        choice1: "",
        choice2: ""
    };
   



    const url = `http://localhost:3006/typeforms/${param}`;
    const [ques, setQues] = useState(initialValues)

    // const [choice1, setChoice1] = useState({
    //     choice1: " " })

    // const [choice2, setChoice2] = useState({
    //     choice2: " " }) 
    const handle = (e) => {
        const { name, value } = e.target;
        setQues({
          ...ques,
          [name]: value,
        });
      };
       
  return (
    <div className="question1"> 
        <div className="question-left">
            <input  onChange={handle} id='quest'name='question'  placeholder="Your questions here"  className='ask-question'/>
            <input placeholder='Description (optional)' className='description'/>
            <div className='choice'>
                <div>
                    <input onChange={handle} name='choice1' id="choice1" placeholder="choice " className='choice'/> 
                    <input onChange={handle}  name='choice2' id="choice2" placeholder="choice " className='choice'/> 
                    <input onClick={(e) => axios.patch(`http://localhost:3006/typeforms/${tid}`, { MultipleChoice: { question: ques.question, choice1: ques.choice1 , choice2: ques.choice2} } )} type="submit" className='submit-question'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions;