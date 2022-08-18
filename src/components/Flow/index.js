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
import SidebarAcoes from '../SidebarAcoes';
import SidebarEventos from '../SidebarEventos';
import TextUpdaterNode from '../TextUpdaterNode';
import SelectAtrasoColeta from '../SelectAtrasoColeta';
import SelectAtrasoEntrega from '../SelectAtrasoEntrega';
import SelectDivergenciaValor from '../SelectDivergenciaValor';
import SelectDivergenciaValorFrete from '../SelectDivergenciaValorFrete';
import SelectEventos from '../SelectEventos';
import React, { useState, useRef, useCallback } from 'react';
import SendEmailNode from '../SendEmailNode/index';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SendSMSNode from '../SendSMSNode/index';
import SendWPPNode from '../SendWPPNode/index';
import { IMaskInput } from 'mask-form/node_modules/react-imask';

//const initialNodes = [
    //{
    //    id: '1',
    //    type: 'input',
    //    data: { label: 'Input Node' },
    //    position: { x: 250, y: 5 },
    //    sourcePosition: 'right',
    //    targetPosition: 'left',
    //    className: 'base-node input-node-inicial'
    //}
//];

// const initialEdges = [
//   { id: '1', source: '1', sourceHandle: 'a', target: '3' },
//   { id: '2', source: '1', sourceHandle: 'b', target: '2' },
// ];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
    textUpdater: TextUpdaterNode,
    selectAtrasoColeta: SelectAtrasoColeta,
    sendEmail: SendEmailNode,
    sendSms: SendSMSNode,
    sendWhatsapp: SendWPPNode,
    selectAtrasoEntrega: SelectAtrasoEntrega,
    selectDivergenciaValor: SelectDivergenciaValor,
    selectDivergenciaValorFrete: SelectDivergenciaValorFrete,
    selectEventos: SelectEventos,
};

const Flow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const { setViewport } = useReactFlow();
    const [showEmail, setShowEmail] = useState(false);
    const [showSMS, setShowSMS] = useState(false);
    const [showWPP, setShowWPP] = useState(false);

    const handleCloseWPP = () => setShowWPP(false);
    const handleShowWPP = () => setShowWPP(true);

    const handleCloseSMS = () => setShowSMS(false);
    const handleShowSMS = () => setShowSMS(true);

    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);

    const handleAddEmail = () => {

        let lista = document.getElementById("listaDestinatariosEmail");
        let newValue = document.getElementById("newEmail");
        var li = document.createElement("li");

        li.value = newValue.value;
        li.innerHTML = `${newValue.value}`;
        li.title = "REMOVER";
        lista.appendChild(li);

        var lis = lista.getElementsByTagName('li');

        const arrayLS = [];
        
        for (let i = 0; i <= lis.length - 1; i++) {
            arrayLS.push(lis[i].innerHTML);
        }

        localStorage.setItem("listaDestinatariosEmail", arrayLS);

        li.onclick = function () {
            lista.removeChild(li);
            var lis = lista.getElementsByTagName('li');

            const arrayLS = [];

            for (let i = 0; i <= lis.length - 1; i++) {
                arrayLS.push(lis[i].innerHTML);
            }

            localStorage.setItem("listaDestinatariosEmail", arrayLS);
        };

        newValue.value = "";
    };
    const handleAddSMS = () => {

        let lista = document.getElementById("listaDestinatariosSMS");
        let newValue = document.getElementById("newSMS");
        var li = document.createElement("li");

        li.value = newValue.value;
        li.innerHTML = `${newValue.value}`;
        li.title = "REMOVER";
        lista.appendChild(li);

        var lis = lista.getElementsByTagName('li');

        const arrayLS = [];

        for (let i = 0; i <= lis.length - 1; i++) {
            arrayLS.push(lis[i].innerHTML);
        }

        localStorage.setItem("listaDestinatariosSMS", arrayLS);

        li.onclick = function () {
            lista.removeChild(li);
            var lis = lista.getElementsByTagName('li');

            const arrayLS = [];

            for (let i = 0; i <= lis.length - 1; i++) {
                arrayLS.push(lis[i].innerHTML);
            }

            localStorage.setItem("listaDestinatariosSMS", arrayLS);
        };

        newValue.value = "";
    };
    const handleAddWPP = () => {

        let lista = document.getElementById("listaDestinatariosWPP");
        let newValue = document.getElementById("newWPP");
        var li = document.createElement("li");

        li.value = newValue.value;
        li.innerHTML = `${newValue.value}`;
        li.title = "REMOVER";
        lista.appendChild(li);

        var lis = lista.getElementsByTagName('li');

        const arrayLS = [];

        for (let i = 0; i <= lis.length - 1; i++) {
            arrayLS.push(lis[i].innerHTML);
        }

        localStorage.setItem("listaDestinatariosWPP", arrayLS);

        li.onclick = function () {
            lista.removeChild(li);
            var lis = lista.getElementsByTagName('li');

            const arrayLS = [];

            for (let i = 0; i <= lis.length - 1; i++) {
                arrayLS.push(lis[i].innerHTML);
            }

            localStorage.setItem("listaDestinatariosWPP", arrayLS);
        };

        newValue.value = "";
    };


    const handleAddAndCloseEmail = () => {

        //get destinatario principal
        let destinatarioPrincipal = "destinatario@principal.com";

        localStorage.setItem("listaDestinatariosEmail", destinatarioPrincipal);

        handleCloseEmail();
    };

    const handleAddAndCloseSMS = () => {

        //get destinatario principal
        let destinatarioPrincipal = "(32) 91234-5678";

        localStorage.setItem("listaDestinatariosSMS", destinatarioPrincipal);

        handleCloseSMS();
    };

    const handleAddAndCloseWPP = () => {

        //get destinatario principal
        let destinatarioPrincipal = "(32) 91234-5678";

        localStorage.setItem("listaDestinatariosWPP", destinatarioPrincipal);

        handleCloseSMS();
    };

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
                handleShowEmail();
            }

            if (type === 'sendSms') {
                handleShowSMS();
            }

            if (type === 'sendWhatsapp') {
                handleShowWPP();
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            const nameOfClass = label.replace(" ", "-")
            const newNode = {
                id: getId(),
                type,
                position,
                sourcePosition: 'right',
                targetPosition: 'left',
                data: { label: `${label}` },
                className: 'base-node ' + nameOfClass.toLowerCase(),
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
                <SidebarEventos />
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

                {/* <div className="save__controls">
                    <button className='btn-save' onClick={onSave}>Save</button>
                    <button className='btn-restore' onClick={onRestore}>Restore</button>
                </div> */}
                <SidebarAcoes />
                
                {/*Modal EMAIL*/}
                <Modal
                    size="lg"
                    show={showEmail}
                    backdrop="static"
                    keyboard={false}
                    onHide={() => setShowEmail(false)}
                >
                    <Modal.Header closeButton>
                        <Row>
                            <Col xs="auto"><Modal.Title>Enviar E-mail</Modal.Title></Col>

                            <Col xs="auto"><Button variant="outline-primary" id="button-addon2" onClick={handleAddAndCloseEmail}>
                                Enviar para o destinatario principal
                            </Button></Col>
                        </Row>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Adicionar destinatario: </InputGroup.Text>
                                    <FloatingLabel label="E-mail">
                                        <Form.Control type="email" id="newEmail" placeholder="nome@email.com" style={{ borderRadius: 0, width: 450 }} />
                                    </FloatingLabel>
                                    <Button variant="outline-primary" id="button-addon2" onClick={handleAddEmail}>
                                        Adicionar
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <hr />
                        <p>Destinatarios Selecionados:</p>
                        <ul id="listaDestinatariosEmail">

                        </ul>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseEmail}>
                            SELECIONAR
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*Modal SMS*/}
                <Modal
                    size="lg"
                    show={showSMS}
                    backdrop="static"
                    keyboard={false}
                    onHide={() => setShowSMS(false)}
                >
                    <Modal.Header closeButton>
                        <Row>
                            <Col xs="auto"><Modal.Title>Enviar SMS</Modal.Title></Col>

                            <Col xs="auto"><Button variant="outline-primary" id="button-addon2" onClick={handleAddAndCloseSMS}>
                                Enviar para o destinatario principal
                            </Button></Col>
                        </Row>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicSMS">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Adicionar destinatario: </InputGroup.Text>
                                    <FloatingLabel label="(DDD) + Numero">
                                        <Form.Control as={IMaskInput} mask="(00) 0 0000-0000" type="text" id="newSMS" placeholder="(DDD) 9 1234-5678" style={{ borderRadius: 0, width: 450 }} />
                                    </FloatingLabel>
                                    <Button variant="outline-primary" id="button-addon2" onClick={handleAddSMS}>
                                        Adicionar
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <hr />
                        <p>Destinatarios Selecionados:</p>
                        <ul id="listaDestinatariosSMS">

                        </ul>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseSMS}>
                            SELECIONAR
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*Modal WHATSAPP*/}
                <Modal
                    size="lg"
                    show={showWPP}
                    backdrop="static"
                    keyboard={false}
                    onHide={() => setShowWPP(false)}
                >
                    <Modal.Header closeButton>
                        <Row>
                            <Col xs="auto"><Modal.Title>Enviar mensagem WhatsApp</Modal.Title></Col>

                            <Col xs="auto"><Button variant="outline-primary" id="button-addon2" onClick={handleAddAndCloseWPP}>
                                Enviar para o destinatario principal
                            </Button></Col>
                        </Row>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicWPP">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Adicionar destinatario: </InputGroup.Text>
                                    <FloatingLabel label="(DDD) + Numero">
                                        <Form.Control type="text" id="newWPP" placeholder="(DDD) 9 1234-5678" style={{ borderRadius: 0, width: 450 }} />
                                    </FloatingLabel>
                                    <Button variant="outline-primary" id="button-addon2" onClick={handleAddWPP}>
                                        Adicionar
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <hr />
                        <p>Destinatarios Selecionados:</p>
                        <ul id="listaDestinatariosWPP">

                        </ul>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseWPP}>
                            SELECIONAR
                        </Button>
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