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
import { IMaskInput } from "react-imask";
import SendHTTPNode from '../SendHTTPNode/index';
import { useFieldArray, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
// import { yupResolver } from '@hookform/resolvers/dist/ie11/yup';

// const initialNodes = [
//     {
//        id: '1',
//        type: 'input',
//        data: { label: 'Input Node' },
//        position: { x: 250, y: 5 },
//        sourcePosition: 'right',
//        targetPosition: 'left',
//        className: 'base-node input-node-inicial'
//     }
// ];

// const initialEdges = [
//   { id: '1', source: '1', sourceHandle: 'a', target: '3' },
//   { id: '2', source: '1', sourceHandle: 'b', target: '2' },
// ];

let id = 0;
const getId = () => `${id++}`;

const nodeTypes = {
    textUpdater: TextUpdaterNode,
    selectAtrasoColeta: SelectAtrasoColeta,
    sendEmail: SendEmailNode,
    sendSms: SendSMSNode,
    sendWhatsapp: SendWPPNode,
    sendHTTP: SendHTTPNode,
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
    const [showHTTP, setShowHTTP] = useState(false);
    const { control, register, handleSubmit, formState: { errors } } = useForm([], { delayError: 500 }, { shouldUseNativeValidation: true });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "componentesCabecalho",
    });

    const handleCloseWPP = () => setShowWPP(false);
    const handleShowWPP = () => setShowWPP(true);

    const handleCloseSMS = () => setShowSMS(false);
    const handleShowSMS = () => setShowSMS(true);

    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);

    const handleCloseHTTP = () => setShowHTTP(false);
    const handleShowHTTP = () => setShowHTTP(true);

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

        handleCloseWPP();
    };

    const handleAddPayloadHTTP = () => {

    }


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

            if (type === 'sendHTTP') {
                handleShowHTTP();
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


            let newEdge = {
                id: `edge-${newNode.id}`, source: localStorage.getItem("lastId"), target: (parseInt(localStorage.getItem("lastId")) + 1).toString(),
            };

            localStorage.setItem("lastId", newNode.id);

            setEdges((eds) => eds.concat(newEdge))
            setNodes((nds) => nds.concat(newNode));
            
        },
        [reactFlowInstance]
    );

    

    const onDoubleClick = useCallback(
        (event, nodeType, nodeLabel) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = nodeType;
            const label = nodeLabel;

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

            if (type === 'sendHTTP') {
                handleShowHTTP();
            }

            const position = reactFlowInstance.project({
                x: 250 - reactFlowBounds.left,
                y: 5 - reactFlowBounds.top,
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

    function componente() {
        return "<Form.Group className=\"mb-3 col-lg-6\"><InputGroup ><InputGroup.Text>Chave</InputGroup.Text><Form.Control type=\"text\" id=\"chave1\" placeholder=\"Informe a chave\" /></InputGroup></Form.Group>";
    };

    const add = () => {
        append(
            {
                chave: '',
                valor: '',
            })
    };

    return (
        <div className='dndflow'>
            <ReactFlowProvider>
                <SidebarEventos onDoubleClick={onDoubleClick} onSave={onSave} onRestore={onRestore} on />

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
                                        <Form.Control type="email" id="newEmail" placeholder="nome@email.com"/>
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
                                        <Form.Control as={IMaskInput} mask="(00) 0 0000-0000" type="text" id="newSMS" placeholder="(DDD) 9 1234-5678"/>
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
                                        <Form.Control as={IMaskInput} mask="(00) 0 0000-0000" type="text" id="newWPP" placeholder="(DDD) 9 1234-5678"/>
                                    </FloatingLabel>
                                    <Button variant="outline-primary" id="button-addon2" onClick={add}>
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
                {/*Modal HTTP*/}
                <Modal
                    size="lg"
                    show={showHTTP}
                    backdrop="static"
                    keyboard={false}
                    onHide={() => setShowHTTP(false)}
                    id="modal-http"
                >
                    <Modal.Header closeButton>
                        <Row>
                            <Col xs="auto"><Modal.Title>HTTP REQUEST</Modal.Title></Col>
                        </Row>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={handleSubmit()}>
                            <Form.Group className="mb-3" controlId="formBasicWPP">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>URL</InputGroup.Text>
                                    <FloatingLabel label="http://">
                                        <Form.Control type="text" id="urlHTTP" placeholder="http://"/>
                                    </FloatingLabel>
                                    <Button variant="outline-primary" id="button-addon2" >
                                        Load data
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <hr />
                            <h5>Tipo de metodo</h5>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="GET"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="POST"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                            <hr />
                            <h5>Cebe??alho</h5>

                            <Button className='mb-3' variant="outline-primary" id="btn-novo-cabecalho" onClick={add} >
                                Novo cabe??alho
                            </Button>
                            {add}
                            {fields.map((componente, index) => (
                                <div key={componente.id} className="">
                                    <div className="grupo-cabecalho mb-2 row " id={`grupo${index + 1}`}>
                                        <span className='mb-1'>Cabe??alho {`${index + 1}`}</span>
                                        <div className="row ">
                                            <Form.Group className="form-group col-lg-5">
                                                <InputGroup >
                                                    <InputGroup.Text className='input-group-text'>Chave</InputGroup.Text>
                                                    <Form.Control type="text" placeholder="Informe a chave" {...register(`componentesCabecalho.${index}.chave`, { required: "Campo obrigat??rio" })} />
                                                </InputGroup>
                                                <ErrorMessage errors={errors} name={`componentesCabecalho.${index}.chave`} render={({ message }) => <span style={{ color: "red", fontWeight: "bold" }} >{message}</span>} />
                                            </Form.Group>
                                            <Form.Group className="form-group col-lg-5">
                                                <InputGroup>
                                                    <InputGroup.Text className='input-group-text'>Valor</InputGroup.Text>
                                                    <Form.Control type="text" name="valor" placeholder="Informe o valor" {...register(`componentesCabecalho.${index}.valor`, { required: "Campo obrigat??rio" })} />
                                                </InputGroup>
                                                <ErrorMessage errors={errors} name={`componentesCabecalho.${index}.valor`} render={({ message }) => <span style={{ color: "red", fontWeight: "bold" }} >{message}</span>} />

                                            </Form.Group>
                                            {index !== 0 &&
                                                <Button className='btn-danger col-lg-1 float-right' id="btn-remove-cabecalho" onClick={() => { remove(index) }}>
                                                    <i className='fa fa-trash'></i>
                                                </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <hr />
                            <h5>Corpo (Payload)</h5>
                            <Form.Group className="mb-3" controlId="formBasicWPP">
                                <Button variant="outline-primary" id="button-addon2" >
                                    Editar o corpo
                                </Button>
                            </Form.Group>
                            {/* <pre>
                                <code>{JSON.stringify(fields, null, 2)}</code>
                            </pre> */}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseHTTP}>
                            SELECIONAR
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ReactFlowProvider>

        </div >

    );
};

export default () => (
    <ReactFlowProvider>
        <Flow />
    </ReactFlowProvider>

);