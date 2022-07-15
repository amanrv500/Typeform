import { FaThList } from 'react-icons/fa'
import { useState, useEffect  } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import UpdaterNode from './questionnode';
import uuid from 'uuid';
import customaxios from '../api/customaxios';
import { useParams } from 'react-router-dom';



 const Nodes = () => {

    const eid = uuid.v4();
    const url = `/Questions`;
    const [items, setItems] = useState([]) 
    const param = useParams();
    const tid = param.id;
    let newnodes = [] 
   

    useEffect(() => {
        return () => {
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
            setItems(alldata);
            }
        )};
    }, []);
    

    for(let i=0;i<items.length;i++){
        
        if(items[i].formID===tid){
            newnodes.push(items[i])    
        }
    };

    for(let i=0;i<newnodes.length;i++){
        let x = 100
        let y = 100 + i*100
        const node = [
            { 
                id: newnodes[i].id,
                type: 'defaultnode',
                position: { x: x, y: y },
                data: {label: (
                    <>
                      <FaThList /> <strong>{newnodes[i].question}</strong>
                    </>
                  ),
                },
                position: { x: x, y: y },
            },
        ]
    }
}

const Edges = () => {
    
    const eid = uuid.v4();
    const url = `/Questions`;
    const [items, setItems] = useState([]) 
    const param = useParams();
    const tid = param.id;
    let newnodes = [] 
  

    useEffect(() => {
        return () => {
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
            setItems(alldata);
            }
        )};
    }, []);
    

    for(let i=0;i<items.length;i++){
        
        if(items[i].formID===tid){
            newnodes.push(items[i])    
        }
    };
    
    for(let i=0;i<newnodes.length;i++){
        const edge = [
            {
                id: eid,
                source: newnodes[i].id,
                target: newnodes[
                    i + 1 
                ].id,
            },
        ] 
    }
    
}

export { Nodes, Edges }
    

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
