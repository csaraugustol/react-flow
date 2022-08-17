import './SelectUpdaterNode.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SelectUpdaterNode({ data }) {

    const handleStyle = { left: 10 };

    const onChangeSelect = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const onChangeText = useCallback((evt) => {
        console.log(evt.target.value);

    }, []);

    return (
        <div className="select-updater-node">
            {/*<Handle type="target" position={Position.Top} />*/}
            <div>
                <label htmlFor="select">Atraso na coleta</label>
                <select id="action" name="select" onChange={onChangeSelect} >
                    <option value="Maior que"> Maior que </option>
                    <option value="Igual"> Igual a </option>
                    <option value="Menor"> Menor que </option>
                    <option value="Menor ou igual"> Menor ou igual a </option>
                    <option value="Maior ou igual"> Maior ou igual a </option>
                </select>
                <div className="dias">
                    <input id="time" type="number" onChange={onChangeText} /> Dias
                </div>
            </div>
            {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
            {/* <Handle type="source" position={Position.Bottom} id="b" />*/}
            <Handle
                type="source"
                position="right"
            />
        </div>
    );
}

export default SelectUpdaterNode;
