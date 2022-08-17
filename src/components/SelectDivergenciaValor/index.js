import './SelectDivergenciaValor.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SelectAtrasoColeta({ data }) {

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
            <div className='conteudo-node'>
                <label htmlFor="select">Divergência de valor</label>

                <select id="action" name="select" onChange={onChangeSelect} >
                    <option value="Igual a"> Igual a </option>
                    <option value="Maior que"> Maior que </option>
                    <option value="Maior ou igual a"> Maior ou igual a </option>
                    <option value="Menor que"> Menor que </option>
                    <option value="Menor ou igual a"> Menor ou igual a </option>
                </select>

                <div className='Valor'><span>R$&nbsp;&nbsp;</span>
                    <input placeholder='Valor Cotado' id="time" type="number" onChange={onChangeText} />
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

export default SelectAtrasoColeta;
