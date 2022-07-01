import React,{ useState, useEffect,useRef} from 'react'
import '../style/questions.css'
import axios from 'axios'
import { useParams,useLocation } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';


const Questions = () => {
    const param = useParams();
    const tid = param.id;
    const qid = uuidv4();

    const initialValues = {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
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
            QuestionType: "MultipleChoice",
            question: ques.question,
            options: { choice1: ques.choice1, choice2: ques.choice2 }
        }).then(res => {
            console.log(res.data)
        } )
    }

    // const addchoice = () => {

    // }

      
       
  return (
    <div className="question1"> 
        <div className="question-left">
            <input  onChange={handle} id='quest'name='question'  placeholder="Your questions here"  className='ask-question'/>
            <input placeholder='Description (optional)' className='description'/>
            <div className='choice'>
                <div>
                    <input onChange={handle} name='choice1' id="choice1" placeholder="choice " className='choice'/> 
                    <input onChange={handle}  name='choice2' id="choice2" placeholder="choice " className='choice'/>
                    {/* <p id='addchoice' onClick={addchoice}>Add Choice</p> 
                    <br/> */}
                    <input onClick={apost} type="submit" className='submit-question'/>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Questions;