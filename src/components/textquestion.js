import React,{ useState, useEffect} from 'react'
import '../style/textquestion.css'
import customaxios from '../api/customaxios';
import { useParams,useLocation } from 'react-router-dom'
import{v4 as uuidv4} from 'uuid';

const Textquestion = () => {
  const url = "/Questions";
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();
    const [count , setCount] = useState(1);

    const initialValues = {
        question: "",
        answer: ""
    };

   
    const [ques, setQues] = useState(initialValues)

    const handle = (e) => {
        const { name, value } = e.target;
        setQues({
          ...ques,
          [name]: value,
        });
      };

    const apost = () => {  
        customaxios.post(url, { 
            id: count,
            formID: tid,      
            QuestionType: "Text",
            question: ques.question,
            answer: ques.answer
        }).then(res => {
          console.log(res.data)
       })
      setCount(count + 1);
    }

  return (
    <div className='question3'>
        <input onChange={handle} id='quest'name='question'  type='text' placeholder='Your questions here' className='textques'/>
        <input onChange={handle} name='answer' id="answer"  type='text' placeholder='Type your answers here'  className='textans'/>
        <button onClick={apost} className='btntext'>
            submit
        </button>
    </div>
  )
}


export default Textquestion