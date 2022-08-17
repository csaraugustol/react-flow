import './SendSMSNode.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SendSMSNode({ data }) {

    const handleStyle = { left: 10 };

    const labelData = [localStorage.getItem("listaDestinatariosSMS")];
    let labelDataSplitted = [];
    if (labelData[0] != null) {
        
        labelDataSplitted = labelData[0].split(",")
    }
        

    return (
        <div className="send-email-node">
            {/*<Handle type="target" position={Position.Top} />*/}
            
            
            <div>
                <ul>
                    <li style={{ listStyleType: 'none' }}>Enviar SMS para:</li>
                    


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

export default SendSMSNode;
