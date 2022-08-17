import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    MiniMap,
    useReactFlow
} from 'react-flow-renderer';
import './Flow.css';
import Sidebar from '../Sidebar';
import TextUpdaterNode from '../TextUpdaterNode';
import SelectUpdaterNode from '../SelectUpdaterNode';
import React, { useState, useRef, useCallback } from 'react';
import SendEmailNode from '../SendEmailNode/index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Input Node' },
        position: { x: 250, y: 5 },
        sourcePosition: 'right',
        targetPosition: 'left',
        className: 'base-node input-node-inicial'
    }
];

// const initialEdges = [
//   { id: '1', source: '1', sourceHandle: 'a', target: '3' },
//   { id: '2', source: '1', sourceHandle: 'b', target: '2' },
// ];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = { textUpdater: TextUpdaterNode, selectUpdater: SelectUpdaterNode, sendEmail: SendEmailNode };

const Flow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const { setViewport } = useReactFlow();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const flowKey = 'flow-token-123';

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            const label = event.dataTransfer.getData('application/label');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }
            if (typeof label === 'undefined' || !label) {
                return;
            }

            if (type === 'sendEmail') {
                console.log(type);
                handleShow();
            }
                
            

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            //const labelSplit = label.split(' ');
            //const nameOfClass = labelSplit[0]; 
            //console.log(nameOfClass.toLowerCase());
            const nameOfClass = label.replace(" ", "-")
            const newNode = {
                id: getId(),
                type,
                position,
                sourcePosition: 'right',
                targetPosition: 'left',
                data: { label: `${label}` },
                className: 'base-node ' + nameOfClass.toLowerCase(),
                //className: 'dndnode ' + nameOfClass.toLowerCase(),
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const onSave = useCallback(() => {
        if (reactFlowInstance) {
            const flow = reactFlowInstance.toObject();
            localStorage.setItem(flowKey, JSON.stringify(flow));
        }
    }, [reactFlowInstance]);

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = JSON.parse(localStorage.getItem(flowKey));

            if (flow) {
                const { x = 0, y = 0, zoom = 1 } = flow.viewport;
                setNodes(flow.nodes || []);
                setEdges(flow.edges || []);
                setViewport({ x, y, zoom });
            }
        };

        restoreFlow();
    }, [setNodes, setViewport]);

    return (
        <div className='dndflow'>
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        fitView
                        
                    >
                        <Controls />
                        <Background />
                        <MiniMap />
                    </ReactFlow>
                </div>

                <div className="save__controls">
                    <button className='btn-save' onClick={onSave}>Save</button>
                    <button className='btn-restore' onClick={onRestore}>Restore</button>
                </div>
                <Sidebar />
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </ReactFlowProvider>
        </div>
    );
};

export default () => (
    <ReactFlowProvider>
        <Flow />
    </ReactFlowProvider>

);
