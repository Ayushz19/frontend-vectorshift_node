// src/InputNode.js

import React from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleNameChange = (e) => {
    updateNodeField(id, 'label', e.target.value);
  };

  const handleTypeChange = (e) => {
    updateNodeField(id, 'inputType', e.target.value);
  };

  return (
    <div style={{ width: 150, padding: 10, border: '1px solid black', borderRadius: 5 }}>
      <div>
        <span>Input</span>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={data.label} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select value={data.inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};


