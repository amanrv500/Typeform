import React from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges,addEdge,Controls,Handle,Position } from 'react-flow-renderer';
import { BsArrowBarLeft } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa'
import UpdaterNode from './updater1.js';
import UpdaterNode2 from './updater2.js';
import {useNavigate} from 'react-router-dom';

let newEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' }
]

let initialEdges = [
  { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' },
  { id: 'e2-3', source: 'b', sourceHandle: 'b', target: '3' },
];


let initialNodes = [
  { id: 'node-1', 
    type: 'UpdaterNode', 
    position: { x: 0, y: 0 }, 
    data: { value: 123 },
    sourcePosition: 'right' },
    
  {
    id: 'node-2',
    type: 'UpdaterNode2',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
]

// let elements = [
//   {id: "1", data: {label: "1"}, position: {x: 0, y: 0}},
//   {id: "2", data: {label: "2"}, position: {x: 200, y: 200}},
//   {id: "3", data: {label: "3"}, position: {x: 400, y: 400}},
//   {id: "e1-e2", source: "1", target: "2"},
//   {id: "e2-e3", source: "2", target: "3"}
// ]

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  let Navigate = useNavigate();

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [newEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const connectask = () => {
    let initailEdges = [ { id: 'e1-2', source: 'a', sourceHandle: 'a', target: 'b' }, ]
    Navigate("/rules")
  }

  const nodeTypes = { UpdaterNode: UpdaterNode ,
                      UpdaterNode2: UpdaterNode2};
  const defaultEdgeOptions = { animated: false };


  return (
    <ReactFlow 
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect,connectask}
      defaultEdgeOptions={defaultEdgeOptions}
      nodeTypes={nodeTypes}
      fitView
    >
    <Controls />
    </ReactFlow>
   
  );
}


export default Flow;
