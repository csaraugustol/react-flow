import './SendSMSNode.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { IMaskInput } from "react-imask";


function SendSMSNode({ data }) {

    const [showSMS, setShowSMS] = useState(false);

    const handleCloseSMS = () => setShowSMS(false);
    const handleShowSMS = () => setShowSMS(true);
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
    const handleAddAndCloseSMS = () => {

        //get destinatario principal
        let destinatarioPrincipal = "(32) 91234-5678";

        localStorage.setItem("listaDestinatariosSMS", destinatarioPrincipal);

        handleCloseSMS();
    };


    const handleEditSMSs = () => {
        let btn = document.getElementById("button-edit");
        btn.removeChild(document.getElementById("lock"));
        let novoIcone = document.createElement('i');
        novoIcone.className = "fa fa-unlock";
        btn.appendChild(novoIcone);

        let lista = document.getElementById("listaDestinatariosSMS");
        lista.replaceChildren([])

        console.log(lista.children)
        content().map(item => {
            var li = document.createElement("li");
            li.value = item;
            li.innerHTML = `${item}`;
            li.title = "REMOVER";
            lista.appendChild(li);
            li.onclick = function () {
                lista.removeChild(li);
                var lis = lista.getElementsByTagName('li');

                const arrayLS = [];

                for (let i = 0; i <= lis.length - 1; i++) {
                    arrayLS.push(lis[i].innerHTML);
                }

                localStorage.setItem("listaDestinatariosSMS", arrayLS);
            };

        })
        if (lista.children.length <= 0) {
            alert("sem emails cadastrados")
        }
    }


    function editModel() {
        handleShowSMS();
    }

    function content() {
        let labelData = [localStorage.getItem("listaDestinatariosSMS")];
        let labelDataSplitted = [];
        if (labelData[0] != null) {

            labelDataSplitted = labelData[0].split(",")
        }
        return labelDataSplitted;
    }


    return (
        <div className="send-sms-node">

            <div>
                <p style={{ listStyleType: 'none' }}>Enviar SMS para:
                    <Button variant="outline-light" style={{
                        marginLeft: 20
                        , border: 'none', backgroundColor: 'transparent'
                    }}
                        id="btn-edt-email" onClick={editModel}>
                        <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </Button>
                </p>
                <ul>
                    {content().map(item => <li key={item}>{item}</li>)}
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

            <Modal
                size="lg"
                show={showSMS}
                backdrop="static"
                keyboard={false}
                onHide={() => setShowSMS(false)}
            >
                <Modal.Header closeButton>
                    <Row>
                        <Col xs="auto"><Modal.Title>Enviar mensagem SMS</Modal.Title></Col>

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
                    <Button variant="outline-warning" id="button-edit" onClick={handleEditSMSs}>
                        Habilitar Edição <i className="fa fa-lock" id="lock" aria-hidden="true"></i>

                    </Button>
                    <ul id="listaDestinatariosSMS">

                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseSMS}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default SendSMSNode;
