import React, {useEffect, useMemo} from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, 
    applyNodeChanges,
    addEdge,
    Controls,
    Handle,
    Position , 
    Background,
    MarkerType,
    } from 'react-flow-renderer';
import { BsArrowBarLeft } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa'
import QuestionNode from './questionnode.js';
import customaxios from '../api/customaxios.js';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Nodes from './nodes.js';
import Edges from './edges.js';
import {v4 as uuidv4} from 'uuid';

// let newEdges = [
//   { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
//   { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' }
// ]

// let initialEdges = [
//   { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' },
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

const nodeTypes = { QuestionNode: QuestionNode,};

const  Flow = () => {

    const nodeTypes = useMemo(
        () => ({
          QuestionNode: QuestionNode,
        }),
        []
    );

    const eid = uuidv4();
    const url = `/Questions`;
    const [items, setItems] = useState([]) 
    const param = useParams();
    const tid = param.id;
    let newnodes = [] 
    let nod = [];
    const [node1, setNode1] = useState([]);
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

    // const initialNodes = newnodes.map((item) => {
    //     return {
    //         id: item.id,
    //         type: 'QuestionNode',
    //         position: { x: 100, y: 200  },
    //         data: {label: item.question, qtype: item.QuestionType
    //         },
    //     }})

    // newnodes.forEach((item) => {
    //     setNod(node => [...node, {
    //         id: item.id,
    //         type: 'QuestionNode',
    //         position: { x: 100, y: 200  },
    //         data: {label: item.question, qtype: item.QuestionType
    //         },
    //     }]
    //     )}
    // )
    console.log(newnodes.length)

    for(let i=0;i<newnodes.length;i++){
        let x = 10
        let y = 10 + i*10
        nod.push([
            {
                id: newnodes[i].id,
                type: 'QuestionNode',
                position: { x: x, y: y  },
                data: {label: newnodes[i].question, qtype: newnodes[i].QuestionType
                },
            }
        ])
    }
    console.log(nod)
    let nod2 = []
    for(let i=0;i<nod.length;i++){
        nod2.push(nod[i][0])
    }
    console.log(nod2)
  







    // const initialEdges = newnodes.map((item) => {
    //     return {
    //         id: item.id,
    //         source: item.id,
    //         target: item.nextQuestion,
    //         sourceHandle: 'a',
    //         targetHandle: 'b',
    //     }})
   


    // setNode(node => [...node, ...initialNodes])

    console.log(nod)
    // {newnodes.map((node1) => {
    //     const { id, question, QuestionType } = node1;
    //     return (
    //         {
    //             id: id,
    //             type: 'QuestionNode',
    //             position: { x: 100, y: 200  },
    //             data: {label: question, qtype: QuestionType},
    //         }
    //     )
    // })}

    
    
    // let initialNodes = [
    //     { 
    //         id: 31, 
    //         type: 'QuestionNode', 
    //         position: { x: 0, y: 0 }, 
    //         data: { label: "aman" , qtype: "text" },
    //     },
    //     {
    //         id: '2',
    //         type: 'QuestionNode',
    //         position: { x: 200, y: 200 },
    //         data: { label: "aman", qtype: "text" },
    //     }
    // ]
    let initialEdges = [
        {   
            id: 'e1-2', 
            source: '1', 
            target: '2' 
        },
    ];
   
    

  
    const [nodes, setNodes] = useState(nod2);

    

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
     

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    //   const onEdgesChange = useCallback(
    //     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    //     [newEdges]
    //   );

   
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    //   const connectask = () => {
    //     let initailEdges = [ { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' }, ]
    //     Navigate("/rules")
    //   }

    
    const defaultEdgeOptions = { markerEnd: {
        type: MarkerType.Arrow
    }};


    

    return (
        <ReactFlow nodes={nodes} onConnect={onConnect} edges={edges} onNodesChange={onNodesChange} nodeTypes={nodeTypes} defaultEdgeOptions={defaultEdgeOptions} fitView >
            <Controls />
            <Background color="#E0E0E0" />
        </ReactFlow>
    );
}

export default Flow;
