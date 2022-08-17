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
        <label htmlFor="select">Atraso na entrega</label>
        <select id="select" name="select" onChange={onChange} >
          <option value="1">Igual</option>
          <option value="2">Maior que</option>
          <option value="3">Maior ou igual</option>
          <option value="4">Menor ou igual</option>
          <option value="5">Menor</option>
        </select>
        <div>
          <input placeholder='Número de dias' type='number'/>
        </div>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default SelectUpdaterNode;
