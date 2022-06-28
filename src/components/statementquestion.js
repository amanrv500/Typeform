import React,{ useState, useEffect} from 'react'
import '../style/statementquestion.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useParams,useLocation } from 'react-router-dom'


const Statementquestion = () => {
    const param = useParams();
    const tid = param.id;
    
    const initialValues = {
        question: "",
    };
    const Qid = uuidv4();
  
    const [ques, setQues] = useState(initialValues)
    

    const handle = (e) => {
        const { name, value } = e.target;
        setQues({
          ...ques,
          [name]: value,
        });
      };

  return (
    <div className='question2'>
        <input  onChange={handle} id='quest'name='question' type='text' placeholder='Your questions here. Recall information with @' className='inputstat'/>
        <button onClick={(e) => axios.patch(`http://localhost:3006/typeforms/${tid}`, { 
         Questions: { 
          id: Qid, 
          QuestionType: "Statement",
          answer: ques.question
         }
        })} className='btnstat'>Continue</button>
    </div>
  )
}

export default Statementquestion