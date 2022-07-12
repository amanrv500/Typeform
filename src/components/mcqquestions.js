import React,{ useState, useRef} from 'react'
import '../style/questions.css'
import customaxios from '../api/customaxios';
import { useParams, } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import { Button, Card, CloseButton, Container, FormControl } from 'react-bootstrap';


const Questions = () => {
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();
    const [count , setCount] = useState(1);
    const [choiceCount , setChoiceCount] = useState(3);

    const initialValues = {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        choice5: ""
    };

    // const ch3 = useRef(null);
    // const ch4 = useRef(null);

    // const addchoice = () => {
    //     ch3.current.style.display = "block";
    // }

    let choices = [
        {
            id: 1,
            value: "",
            label: "Choice 1"
        },
        {
            id: 2,
            value: "",
            label: "Choice 2"
        }
    ];

    const choiceAdd = (e) => {
           choices = [ ...choices, {
            id: choiceCount,
            value: "",
            label: `Choice ${choiceCount}`
        }];
        setChoiceCount(choiceCount + 1);
        console.log('choiceCount', choiceCount,choices);
    }

    const choiceRemove = (e) => {
        choices.pop();
        setChoiceCount(choiceCount-1);
        console.log('choiceremove',choiceCount,choices);
    }

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
            id: qid,
            count: count,
            formID: tid,
            QuestionType: "MultipleChoice",
            question: ques.question,
            options: { choice1: ques.choice1, choice2: ques.choice2 }
        }).then(res => {
            console.log(res.data)
        })
        setCount(count + 1);
    }  
   
       
    return (
        <Card className='p-5 mx-0 h-80 mt-5 w-100'> 
           <div className='h-100 w-50 mt-1 border-end'>
                <FormControl  onChange={handle} id='quest' name='question'  placeholder="Your questions here"  className='h-20 border-0'/>
                <FormControl placeholder='Description (optional)' className='mb-2 border-0'/>
                <div className=' p-0 m-0'>
                    {choices.map(choice => (
                        <span key={choice.id} className="position-relative ms-3 mb-2 w-30 closebuttonspan">
                            <FormControl type='text' onChange={handle} name={choice.label} placeholder='choice' className='w-30 bord'/>
                            <span className="position-absolute top-50 end-0 translate-middle-y me-1  ">
                                <CloseButton  onClick={choiceRemove} className='closebutton'/>
                            </span>
                            
                        </span>
                    ))}
                        {/* <FormControl onChange={handle}  type='text' name='choice1' id="choice1" placeholder="choice" className='mb-3 w-30'/>
                        <FormControl onChange={handle} type='text' name='choice2' id="choice2" placeholder="choice" className='mb-3 w-30'/> */}
                        {/* <FormControl ref={ch3} onChange={handle} type='text' name='choice2' id="choice2" placeholder="choice" className='mb-3 d-none'/>
                        <FormControl ref={ch4} onChange={handle} type='text' name='choice2' id="choice2" placeholder="choice" className='mb-3 d-none'/> */}
                        {/* <p id='addchoice' className='mx-2' onClick={addchoice}>Add Choice</p> 
                        */}
                        <Button variant="none" className='ms-1' onClick={choiceAdd}><p className='text-decoration-underline text-primary'>Add Choice</p></Button>
                        <br/>
                        <Button onClick={apost} type="submit" className='ms-3'>Submit</Button>
                </div>
            </div>
        </Card>
    )
}

export default Questions;