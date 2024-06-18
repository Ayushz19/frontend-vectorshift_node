// src/MainComponent.js

import React from 'react';
import { useStore } from '../store';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import {InputNode} from './inputNode';
import {OutputNode} from './outputNode';
import './MainComponent.css'

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
};

const MainComponent = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const addNode = useStore((state) => state.addNode);
  const getNodeID = useStore((state) => state.getNodeID);
  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const onConnect = useStore((state) => state.onConnect);

  const handleAddNode = (type) => {
    const id = getNodeID(type);
    const newNode = {
      id,
      type,
      data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`, inputType: 'Text' },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    addNode(newNode);
  };

  return (
    <div style={{display:'flex' , gap:'30px' , margin:'20px 20px'}}>
      <button className='addbtn' onClick={() => handleAddNode('input')}>Add Input Node</button>
      <button className='addbtn'  onClick={() => handleAddNode('output')}>Add Output Node</button>
      <ReactFlow
      className='node'
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default MainComponent;
