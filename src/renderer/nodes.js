import { FaThList } from 'react-icons/fa'
import { useState, useEffect  } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import UpdaterNode from './questionnode';
import {v4 as uuidv4} from 'uuid';
import customaxios from '../api/customaxios';
import { useParams } from 'react-router-dom';



 const Nodes = () => {

    const eid = uuidv4();
    const url = `/Questions`;
    const [items, setItems] = useState([]) 
    const param = useParams();
    const tid = param.id;
    let newnodes = [] 
    const [node, setNode] = useState([]);

    useEffect(() => {
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
            setItems(alldata);
            }
        );
    }, []);
    

    for(let i=0;i<items.length;i++){
        if(items[i].formID===tid){
            newnodes.push(items[i])    
        }
    };

    let initialNodes = newnodes.map((item) => {
        setNode(node => [...node, {
            id: item.id,
            type: 'QuestionNode',
            position: { x: 100, y: 200  },
            data: {label: item.question, qtype: item.QuestionType},
    }]
        )}
    )

    return node;

    // for(let i=0;i<newnodes.length;i++){
    //     let x = 10
    //     let y = 10 + i*10
    //     node.push([
    //         { 
    //             id: newnodes[i].id,
    //             type: 'QuestionNode',
    //             position: { x: 100, y: 200  },
    //             data: {label: newnodes[i].question, qtype: newnodes[i].QuestionType
    //             },
    //         },
    //     ])
    // }
}



export default Nodes;
    

    // return(
        
    //     // <div>
    //     //     <Handle type="target" position={Position.Right} />
    //     //     <span>
    //     //         <FaThList />
    //     //     </span>
    //     //     <Handle type="source" position={Position.Left} />
    //     // </div>
    // )


    

    // return( [
    //     {
    //     id: '1',
    //     type: 'UpdaterNode',
    //     data: { label: <div><span><FaThList />  1</span></div> },
    //     position: { x: 250, y: 25 },
    //     },
    //     {
    //     id: '2',
    //     type: 'UpdaterNode2',
    //     // you can also pass a React component as a label
    //     data: { label: <div><span><FaThList />  2</span></div>  },
    //     position: { x: 100, y: 125 },
    //     } 
    // ]);
