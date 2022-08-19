import './SendWPPNode.css'
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

function SendWPPNode({ data }) {

    const [showWPP, setShowWPP] = useState(false);

    const handleCloseWPP = () => setShowWPP(false);
    const handleShowWPP = () => setShowWPP(true);
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
    const handleAddAndCloseWPP = () => {

        //get destinatario principal
        let destinatarioPrincipal = "(32) 91234-5678";

        localStorage.setItem("listaDestinatariosWPP", destinatarioPrincipal);

        handleCloseWPP();
    };
    const handleEditWPPs = () => {
        let btn = document.getElementById("button-edit");
        btn.removeChild(document.getElementById("lock"));
        let novoIcone = document.createElement('i');
        novoIcone.className = "fa fa-unlock";
        btn.appendChild(novoIcone);

        let lista = document.getElementById("listaDestinatariosWPP");
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

                localStorage.setItem("listaDestinatariosWPP", arrayLS);
            };

        })
        if (lista.children.length <= 0) {
            alert("sem emails cadastrados")
        }
    }
    

    function editModel() {

        handleShowWPP();
    }
    function content() {
        let labelData = [localStorage.getItem("listaDestinatariosWPP")];
        let labelDataSplitted = [];
        if (labelData[0] != null) {

            labelDataSplitted = labelData[0].split(",")
        }
        return labelDataSplitted;
    }
        

    return (
        <div className="send-wpp-node">
                  
            <div>
                <p style={{ listStyleType: 'none' }}>Enviar WhatsApp para:
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
                                    <Form.Control as={IMaskInput} mask="(00) 0 0000-0000" type="text" id="newWPP" placeholder="(DDD) 9 1234-5678" style={{ borderRadius: 0, width: 450 }} />
                                </FloatingLabel>
                                <Button variant="outline-primary" id="button-addon2" onClick={handleAddWPP}>
                                    Adicionar
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                    <hr />
                    <p>Destinatarios Selecionados:</p>
                    <Button variant="outline-warning" id="button-edit" onClick={handleEditWPPs}>
                    <i className="fa fa-lock" id="lock" aria-hidden="true"></i> Habilitar Edição

                    </Button>
                    <ul id="listaDestinatariosWPP">

                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseWPP}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default SendWPPNode;
