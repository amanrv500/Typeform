import React,{ useState, useRef} from 'react'
import '../style/questions.css'
import customaxios from '../api/customaxios';
import { useParams, } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import { Button, Card, CloseButton, FormControl, Overlay } from 'react-bootstrap';
import { FaRandom } from 'react-icons/fa';


const Questions = (props) => {
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


    // const choiceAdd = () => {
    //     const newchoices = [ ...choices, {
    //         id: choiceCount,
    //         value: "",
    //         label: `Choice ${choiceCount}`
    //     }];
    //     setChoices(newchoices);
    //     setChoiceCount(choiceCount + 1);
    //     console.log('choiceCount', choiceCount,choices);
    // }

    // const choiceRemove = (index) => {
    //     const newchoices = [ ...choices];
    //     newchoices.splice(index, 1);
    //     setChoices(newchoices);
    //     // choices.splice({index})
    //     setChoiceCount(choiceCount-1);
    //     console.log('choiceremove',choiceCount,choices);
    // }
    const choiceAdd = (e) => {
        const newchoices = [
          ...choices,
          {
            id: choiceCount,
            value: '',
            label: `Choice ${choiceCount}`,
          },
        ];
        setChoices(newchoices);
        setChoiceCount(choiceCount + 1);
        console.log('choiceCount', choiceCount, choices);
    };
    
    const choiceRemove = (e, i) => {
        let formValues = [...choices];
        formValues.splice(i, 1);
        setChoices(formValues);
        setChoiceCount(choiceCount - 1);
    };

    const url = `/Questions`;
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
            QuestionType: "MultipleChoice",
            question: ques.question,
            options: { choice1: ques.choice1, choice2: ques.choice2 }
        }).then(res => {
            console.log(res.data)
        })
        setCount(count + 1);
        props.refresh(Math.random());
    } 
   
       
    return (
        <Card className='p-5 mx-0 h-80 mt-4 w-100 shadow'> 
           <div className='h-100 w-50 mt-1 border-end'>
                <FormControl  onChange={handle} id='quest' name='question' size="lg"  placeholder="Your questions here" autoComplete='off' className='h-20 p-0 border-0 formControl'/>
                <FormControl placeholder='Description (optional)'size='sm' className='mb-2 p-0 border-0'/>
                <div className=''>
                    {/* {choices.map((choice,index) => (
                        <span key={choice.id} className=" ms-3 mb-2"  onClick={() => setShow(!show)}>
                            
                            
                            <div className=' p-0 w-40  position-relative'>
                                <FormControl type='text' onChange={handle} name={choice.label} placeholder='choice' className='ms-2 bord' ref={target}/>
                                    <CloseButton  onClick={choiceRemove(index)} className='position-absolute top-50 start-100 translate-middle closebutton bg-dark'/>
                                
                            </div>
                        </span>
                    ))} */}
                    {choices?.length &&
                        choices.map((choice, index) => (
                        <span
                            key={choice.id}
                            className=' ms-3 mb-2'
                            onClick={() => setShow(!show)}
                        >

                            <div className=' p-0 w-40  position-relative'>
                                <FormControl
                                    type='text'
                                    onChange={handle}
                                    name={choice.label}
                                    placeholder='choice'
                                    className='ms-2' ref={target}
                                />

                                <CloseButton
                                    onClick={(e) => choiceRemove(e, index)}
                                    className='position-absolute top-50 start-100 translate-middle closebutton bg-dark'
                                />
                </div>
              </span>
            ))}
                </div>
                <Button variant="none" className='' onClick={choiceAdd}><p className='text-decoration-underline text-primary'>Add Choice</p></Button>
                <br/>
                <Button onClick={apost} type="submit"  className='bg-blue'>Submit</Button>
            </div>
        </Card>
    )
}

export default Questions;

{/* <Overlay target={target.current} show={show} placement="right">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                    <div {...props} style={{ position: 'absolute', color: 'white', borderRadius: 3, ...props.style,}}>
                                        <CloseButton  onClick={choiceRemove} className=''/>
                                    </div>
                                )}
                            </Overlay> */}

                            {/* <FormControl type='text' onChange={handle} name={choice.label} placeholder='choice' className='w-30 bord' ref={target}/> */}
                            {/* <span className="position-absolute top-50 end-0 translate-middle-y me-1  ">
                                <CloseButton className='closebuttonspan' onClick={choiceRemove}/>
                            </span> */}