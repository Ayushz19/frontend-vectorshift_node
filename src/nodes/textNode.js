// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');



 
  const [inputWidth, setInputWidth] = useState(100); // Initial width
  const [inputHeight, setInputHeight] = useState(30); // Initial height

  const handleTextChange = (e) => {
    const { value } = e.target;
    setCurrText(value);
    
    // Update the width based on the length of the text
    setInputWidth(100 + value.length * 10);
    
    // Update the height based on the number of lines
    setInputHeight(30 + (value.split('\n').length - 1) * 20);
  }

  // const handleTextChange = (e) => {
  //   setCurrText(e.target.value);
    
  // };
  

  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
            style={{
              width: inputWidth,
              height: inputHeight,
              boxSizing: 'border-box',
              padding: '10px'
            }}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
