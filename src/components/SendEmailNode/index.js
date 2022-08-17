import './SendEmailNode.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SendEmailNode({ data }) {

    const handleStyle = { left: 10 };

    const labelData = [localStorage.getItem("listaDestinatarios")];
    const labelDataSplitted = labelData[0].split(",")

    return (
        <div className="send-email-node">
            {/*<Handle type="target" position={Position.Top} />*/}
            
            
            <div>
                <ul>
                    <li style={{ listStyleType: 'none' } }>DESTINATARIOS:</li>
                    {labelDataSplitted.map(item => <li key={item}>{item}</li>) }
                </ul>
            </div>
            {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
            {/* <Handle type="source" position={Position.Bottom} id="b" />*/}
            <Handle
                type="target"
                position="left"
            />
        </div>
    );
}

export default SendEmailNode;
