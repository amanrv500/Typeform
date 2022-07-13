import React,{ useState, useRef} from 'react'
import '../style/questions.css'
import customaxios from '../api/customaxios';
import { useParams, } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import { Button, Card, CloseButton, Container, FormControl, Overlay } from 'react-bootstrap';


const Questions = () => {
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();
    const [show, setShow] = useState(false);
    const [count , setCount] = useState(1);
    const [choiceCount , setChoiceCount] = useState(3);
    const target = useRef(null);
    // const [choices , setChoices] = useState({
    //     id: choiceCount,
        
    // });

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

    const [choices , setChoices] = useState([
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
    ]);


    const choiceAdd = (e) => {
        const newchoices = [ ...choices, {
            id: choiceCount,
            value: "",
            label: `Choice ${choiceCount}`
        }];
        setChoices(newchoices);
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
        <Card className='p-5 mx-0 h-80 mt-4 w-100 shadow'> 
           <div className='h-100 w-50 mt-1 border-end'>
                <FormControl  onChange={handle} id='quest' name='question'  placeholder="Your questions here"  className='h-20 border-0'/>
                <FormControl placeholder='Description (optional)' className='mb-2 border-0'/>
                <div className=' p-0 m-0'>
                    {choices.map(choice => (
                        <span key={choice.id} className="position-relative ms-3 mb-2 w-30 closebuttonspan"  onClick={() => setShow(!show)}>
                            <FormControl type='text' onChange={handle} name={choice.label} placeholder='choice' className='w-30 bord' ref={target}/>
                            {/* <span className="position-absolute top-50 end-0 translate-middle-y me-1  ">
                                <CloseButton className='closebuttonspan' onClick={choiceRemove}/>
                            </span> */}
                        </span>
                    ))}
                    <Button variant="none" className='ms-1' onClick={choiceAdd}><p className='text-decoration-underline text-primary'>Add Choice</p></Button>
                    <br/>
                    <Button onClick={apost} type="submit" className='ms-3'>Submit</Button>
                    <Overlay target={target.current} show={show} placement="right">
                        {({ placement, arrowProps, show: _show, popper, ...props }) => (
                            <div {...props} style={{ position: 'absolute', color: 'white', borderRadius: 3, ...props.style,}}>
                                <CloseButton  onClick={choiceRemove} className=''/>
                            </div>
                        )}
                    </Overlay>
                </div>
            </div>
        </Card>
    )
}

export default Questions;