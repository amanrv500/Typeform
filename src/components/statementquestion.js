import React,{ useState, useEffect} from 'react'
import '../style/statementquestion.css'
import customaxios from '../api/customaxios';
import { v4 as uuidv4 } from 'uuid';
import { useParams,useLocation } from 'react-router-dom'


const Statementquestion = () => {
    const url = "/Questions";
    const param = useParams();
    const tid = param.id;
    const [count, setCount] = useState(1);

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

   
    const apost = () => {
        customaxios.post(url, {
            id: count,
            formID: tid,
            QuestionType: "Statement",
            question: ques.question
        }).then(res => {
            console.log(res.data)
        })
        setCount(count + 1);
    }

  return (
    <div className='question2'>
        <input  onChange={handle} id='quest'name='question' type='text' placeholder='Your questions here. Recall information with @' className='inputstat'/>
        <button onClick={apost} className='btnstat'>Continue</button>
    </div>
  )
}

export default Statementquestion