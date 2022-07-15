import React, {useEffect} from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges,addEdge,Controls,Handle,Position , Background} from 'react-flow-renderer';
import { BsArrowBarLeft } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa'
import QuestionNode from './questionnode.js';
import UpdaterNode2 from './updater2.js';
import customaxios from '../api/customaxios.js';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Nodes as initialNodes, Edges as initialEdges } from './nodes';

// let newEdges = [
//   { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
//   { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' }
// ]

// let initialEdges = [
//   { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' },
//   { id: 'e2-3', source: 'b', sourceHandle: 'b', target: '3' },
// ];

// let initialNodes = [
//   { id: 'node-1', 
//     type: 'QuestionNode', 
//     position: { x: 0, y: 0 }, 
//     data: { value: 123 },
//     sourcePosition: 'right' 
//   },
// ]




// let elements = [
//   {id: "1", data: {label: "1"}, position: {x: 0, y: 0}},
//   {id: "2", data: {label: "2"}, position: {x: 200, y: 200}},
//   {id: "3", data: {label: "3"}, position: {x: 400, y: 400}},
//   {id: "e1-e2", source: "1", target: "2"},
//   {id: "e2-e3", source: "2", target: "3"}
// ]

const  Flow = () => {

    // const url = `/Questions`;
    // const [items, setItems] = useState([]) 
    // const param = useParams();
    // const tid = param.id;
    // let newnodes = [] 

    // useEffect(() => {
    //   return () => {
    //     customaxios.get(url).then(
    //       (res) => {
    //         const alldata = res.data;
    //         setItems(alldata);
    //       }
    //     );
    //   };
    // }, []);

    // for(let i=0;i<items.length;i++){
    //   let x = 100
    //   let y = 100 + i*100

    //   if(items[i].formID===tid){
    //       // newnodes.push(items[i])
    //       setNodes([
    //         { id: items[i].id,
    //           type: 'defaultnode',
    //           position: { x: x, y: y },
    //           data: { value: items[i].count },
    //   }])
    //   }
    // };
  
  const [nodes, setNodes] = useState(initialNodes);

    // setNodes([
    //   ...nodes,
    //   {
    //     id: new,
    //     type: 'UpdaterNode',
    //     targetPosition: 'top',
    //     position: { x: 200, y: 200 },
    //     data: { label: 'node 3' },
    //   },
    // ]);


    const [edges, setEdges] = useState(initialEdges);
     

    // const onNodesChange = useCallback(
    //     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    //     [setNodes]
    // );
    //   const onEdgesChange = useCallback(
    //     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    //     [newEdges]
    //   );

   
    // const onConnect = useCallback(
    //     (connection) => setEdges((eds) => addEdge(connection, eds)),
    //     [setEdges]
    // );

    //   const connectask = () => {
    //     let initailEdges = [ { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' }, ]
    //     Navigate("/rules")
    //   }

    // const nodeTypes = { QuestionNode: QuestionNode};
    // const defaultEdgeOptions = { animated: false };


    

    return (
        <ReactFlow nodes={nodes} edges={edges}  fitView >
            <Controls />
            <Background color="#E0E0E0" />
        </ReactFlow>
    );
}

export default Flow;
