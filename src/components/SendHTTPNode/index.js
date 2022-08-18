import './SendHTTPNode.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SendHTTPNode({ data }) {

    return (
        <div className="send-http-node">
            <div>
                <ul>
                    <li style={{ listStyleType: 'none' }}>HTTP Request</li>
                </ul>
            </div>
            <Handle
                type="source"
                position="right"
            />
            <Handle
                type="target"
                position="left"
            />
        </div>
    );
}

export default SendHTTPNode;
