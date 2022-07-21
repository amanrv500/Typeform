import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import {v4 as uuidv4} from 'uuid';

// let newEdges = [
//   { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
//   { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' }
// ]

const nodeTypes = { QuestionNode: QuestionNode,};

const  Flow = () => {

    const nodeTypes = useMemo(
        () => ({
          QuestionNode: QuestionNode,
        }),
        []
    );

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const eid = uuidv4();
    const url = `/Questions`;
    const param = useParams();
    const tid = param.id;

    const edge = () => {
        customaxios.get(url).then((res) => {
            const alldata = res.data;
            let edg = [];
            if (alldata?.length) {
                for(let i=0;i<alldata.length-1;i++){
                    if(alldata[i].formID===tid){
                        edg.push({
                            id: eid,
                            source: alldata[i].id,
                            target: alldata[i+1].id,
                        });
                    }
                }
            }
            console.log(edg);
            setEdges(edg);
        });
    }

   
    const node = () => {
        customaxios.get(url).then((res) => {
            const alldata = res.data;
            let nod = [];
            let count = 0;
            if (alldata?.length) {
                alldata.forEach((element, i) => {
                    if (element.formID === tid) {
                        let x = 10 + count++ * 200;
                        let y = 10;
                        nod.push({
                            id: element.id,
                            type: 'QuestionNode',
                            position: { x: x, y: y },
                            data: {
                                label: element.question,
                                qtype: element.QuestionType,
                            },
                        });
                    }
                });
            }
            setNodes(nod);
        });
    };

    useEffect(() => {
        node();
        edge();
    }, []);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
      const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        // [newEdges]
      );

   
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    //   const connectask = () => {
    //     let initailEdges = [ { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' }, ]
    //     Navigate("/rules")
    //   }

    
    const defaultEdgeOptions = { markerEnd: {
        type: MarkerType.Arrow,
        // style: { 
        //     stroke: "red", 
        //     strokeWidth: 30, 
        //     cursor: "pointer" 
        // }
    }};

    return (
        <ReactFlow 
            nodes={nodes} 
            onConnect={onConnect} 
            edges={edges} 
            onNodesChange={onNodesChange} 
            nodeTypes={nodeTypes} 
            defaultEdgeOptions={defaultEdgeOptions} 
            fitView 
            defaultZoom={0.5}
            defaultPosition={[0, 0]}
            zoomOnScroll={false}
            >
            <Controls />
            <Background 
                color="#0000" 
                variant='none' 
                style={{backgroundColor:"#FAFAFA"}}/>
        </ReactFlow>
    );
}

export default Flow;
