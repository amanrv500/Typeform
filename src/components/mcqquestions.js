import React,{ useState, useRef} from 'react'
import '../style/questions.css'
import customaxios from '../api/customaxios';
import { useParams, } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import { Button, Card, FormControl } from 'react-bootstrap';


const Questions = () => {
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();
    const [count , setCount] = useState(1);

    const initialValues = {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
    };

    // const ch3 = useRef(null);
    // const ch4 = useRef(null);

    // const addchoice = () => {
    //     ch3.current.style.display = "block";
    // }
        


    const url = `/Questions`;
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
            QuestionType: "MultipleChoice",
            question: ques.question,
            options: { choice1: ques.choice1, choice2: ques.choice2 , choice3: ques.choice3, choice4: ques.choice4 }
        }).then(res => {
            console.log(res.data)
        })
        setCount(count + 1);
    }  
       
    return (
        <Card className="question1"> 
            <div className="question-left">
                <input  onChange={handle} id='quest'name='question'  placeholder="Your questions here"  className='ask-question'/>
                <input placeholder='Description (optional)' className='description mb-3'/>
                <div className=' p-0 m-0'>
                        
                        <FormControl onChange={handle}  type='text' name='choice1' id="choice1" placeholder="choice" className='mb-3'/>
                        <FormControl onChange={handle} type='text' name='choice2' id="choice2" placeholder="choice" className='mb-3'/>
                        {/* <FormControl ref={ch3} onChange={handle} type='text' name='choice2' id="choice2" placeholder="choice" className='mb-3 d-none'/>
                        <FormControl ref={ch4} onChange={handle} type='text' name='choice2' id="choice2" placeholder="choice" className='mb-3 d-none'/> */}
                        {/* <p id='addchoice' className='mx-2' onClick={addchoice}>Add Choice</p> 
                        <br/> */}
                        <Button onClick={apost} type="submit" className=''>Submit</Button>
                </div>
            </div>
        </Card>
    )
}

export default Questions;