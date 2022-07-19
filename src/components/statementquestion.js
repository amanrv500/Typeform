import React,{ useState} from 'react'
import '../style/questions.css'
import customaxios from '../api/customaxios';
import { v4 as uuidv4 } from 'uuid';
import { useParams} from 'react-router-dom'
import { Button, Card, FormControl } from 'react-bootstrap';


const Statementquestion = (props) => {
    const url = "/Questions";
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();
    const [count, setCount] = useState(1);

    const initialValues = {
        question: "",
    };

  
    const [ques, setQues] = useState(initialValues)
    

    const handle = (e) => {
        const { name, value } = e.target;
        setQues({
          ...ques,
          [name]: value,
        });
        props.refresh(Math.random());
    };

   
    const apost = () => {
        customaxios.post(url, {
            id: qid,
            count: count,
            formID: tid,
            QuestionType: "Statement",
            question: ques.question
        }).then(res => {
            console.log(res.data)
        })
        setCount(count + 1);
        props.refresh(Math.random());
    }

  return (
    <Card className='p-5 mx-0 h-80 mt-4 w-100 shadow'>
        <div className='h-100 w-50 mt-1 border-end'>
          <FormControl  onChange={handle} id='quest' name='question' type='text' placeholder='Your questions here. Recall information with @'  className='h-20 border-0 mt-5'/>
          <FormControl type='text' placeholder='Description (optional)'  className=' border-0 mb-5 '/>
          <Button onClick={apost} variant='none' className='btnstat ms-3'>Continue</Button>
        </div>
    </Card>
  )
}

export default Statementquestion