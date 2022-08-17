import './SendEmailNode.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SendEmailNode({ data }) {

    const handleStyle = { left: 10 };

    return (
        <div className="send-email-node">
            {/*<Handle type="target" position={Position.Top} />*/}
            <div>
                DESTINATARIOS SELECIONADOS
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
