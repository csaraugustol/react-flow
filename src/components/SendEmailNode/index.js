import './SendEmailNode.css'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function SendEmailNode({ data }) {

    const [showEmail, setShowEmail] = useState(false);

    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);
    const handleAddAndCloseEmail = () => {

        //get destinatario principal
        let destinatarioPrincipal = "destinatario@principal.com";

        localStorage.setItem("listaDestinatariosEmail", destinatarioPrincipal);

        handleCloseEmail();

    };
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

    function content() {
        let labelData = [localStorage.getItem("listaDestinatariosEmail")];
        let labelDataSplitted = [];
        if (labelData[0] != null) {

            labelDataSplitted = labelData[0].split(",")
        }
        return labelDataSplitted;
    }

    function editModel() {

        handleShowEmail();
    }

    const handleEditEmails = () => {
        let btn = document.getElementById("button-edit");
        btn.removeChild(document.getElementById("lock"));
        let novoIcone = document.createElement('i');
        novoIcone.className = "fa fa-unlock";
        btn.appendChild(novoIcone);

        let lista = document.getElementById("listaDestinatariosEmail");
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

                localStorage.setItem("listaDestinatariosEmail", arrayLS);
            };

        })
        if (lista.children.length <= 0) {
            alert("sem emails cadastrados")
        }
    }

    return (

        <div className="send-email-node">

            <div>
                <p style={{ listStyleType: 'none' }}>Enviar e-mail para:
                    <Button variant="outline-light" style={{marginLeft: 40, border: 'none', backgroundColor: 'transparent' }} id="btn-edt-email" onClick={editModel}>
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
                    <Button variant="outline-warning" id="button-edit" onClick={handleEditEmails}>
                        Habilitar Edição <i className="fa fa-lock" id="lock" aria-hidden="true"></i>

                    </Button>

                    <ul id="listaDestinatariosEmail" name="lista">

                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseEmail}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SendEmailNode;
