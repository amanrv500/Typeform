import React,{ useState, useEffect} from 'react'
import '../style/textquestion.css'
import axios from 'axios'
import { useParams,useLocation } from 'react-router-dom'
import{v4 as uuidv4} from 'uuid';

const Textquestion = () => {
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();

    const initialValues = {
        question: "",
        answer: ""
    };

    const url = `http://localhost:3006/Questions`;
    const [ques, setQues] = useState(initialValues)

    const handle = (e) => {
        const { name, value } = e.target;
        setQues({
          ...ques,
          [name]: value,
        });
      };

    const apost = () => {  
        axios.post(url, { 
            id: qid,
            formID: tid,      
            QuestionType: "Text",
            question: ques.question,
            answer: ques.answer
        }).then(res => {
          console.log(res.data)
       })
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