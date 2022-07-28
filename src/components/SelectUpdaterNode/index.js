import './SelectUpdaterNode.css'
import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyle = { left: 10 };

function SelectUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="select-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="select">Select</label>
        <select id="select" name="select" onChange={onChange} >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
        </select>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default SelectUpdaterNode;
