// textNode.js

import { useState , useEffect , useRef } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [textareaWidth, setTextareaWidth] = useState(100); // Initial width
  const [textareaHeight, setTextareaHeight] = useState(30); // Initial height
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    const { value } = e.target;
    setCurrText(value);
    setTextareaHeight(textareaRef.current.scrollHeight);
    // Update the width based on the length of the text
    const lines = value.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    setTextareaWidth(100 + maxLength * 8); // Adjust the multiplier for your font
  };

  useEffect(() => {
    // Adjust the initial height
    setTextareaHeight(textareaRef.current.scrollHeight);
  }, []);

  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <textarea
          ref={textareaRef}
            
            value={currText}
            onChange={handleTextChange}
            style={{
              width: textareaWidth,
              height: textareaHeight,
              boxSizing: 'border-box',
              padding: '10px',
              overflow: 'hidden',
              resize: 'none' // Prevent manual resizing by the user
            }}
          />
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
