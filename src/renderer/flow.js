import React from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges,addEdge,MiniMap,Controls,Background } from 'react-flow-renderer';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';
import { BsArrowBarLeft } from 'react-icons/bs';

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const defaultEdgeOptions = { animated: true };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      defaultEdgeOptions={defaultEdgeOptions}
      fitView
    ><MiniMap />
    <Controls />
    <Background />
    </ReactFlow>
   
  );
}

export default Flow;
