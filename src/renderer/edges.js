import { FaThList } from 'react-icons/fa'
import { useState, useEffect  } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import UpdaterNode from './questionnode';
import {v4 as uuidv4} from 'uuid';
import customaxios from '../api/customaxios';
import { useParams } from 'react-router-dom';




const Edges = () => {
    
    const eid = uuidv4();
    const url = `/Questions`;
    const [items, setItems] = useState([]) 
    const param = useParams();
    const tid = param.id;
    let newnodes = [] 
    let edge = []


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
  
    for(let i=0;i<newnodes.length-1;i++){
        edge.push([
            {
              id: eid,
              source: newnodes[i].id,
              target: newnodes[ i + 1 ].id,
            },
        ])
    }
    return edge;
}

export default Edges;
  