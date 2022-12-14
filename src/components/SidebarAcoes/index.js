import './SidebarAcoes.css';
import React, { Children } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

export default (props) => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };


  var abrir = document.getElementById('btn-menu-acoes');
  var sidebarAcoes = document.getElementById('sidebar-acoes');

  function chamaMenu() {
    sidebarAcoes.style.display = 'block';
    abrir.style.display = 'none';
  };

  function fecharMenu() {
    sidebarAcoes.style.display = 'none';
    abrir.style.display = 'block';
  };

  const onDoubleClick = (event, nodeType, label) => {
    props.onDoubleClick(event, nodeType, label);
  };

  return (
    <aside className='aside-acoes'>
      <button id='btn-menu-acoes' onClick={() => chamaMenu()}><FaPlusCircle className='name'/>Ações</button>
      <div id='sidebar-acoes' className='sidebar-acoes'>
        <div className='cabecalho-sidebar'>
          <h3>Ações</h3>
          <button className='btn-fechar' onClick={() => fecharMenu()}><FaTimesCircle /></button>
        </div>
        <hr />
        <h5>Comunicação</h5>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'sendSms', 'Enviar SMS Node')} onDragStart={(event) => onDragStart(event, 'sendSms', 'Enviar SMS Node')} draggable>
          Enviar SMS
        </div>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'sendWhatsapp', 'Enviar WhatsApp Node')} onDragStart={(event) => onDragStart(event, 'sendWhatsapp', 'Enviar WhatsApp Node')} draggable>
          Enviar WhatsApp
        </div>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'sendEmail', 'Enviar e-mail Node')} onDragStart={(event) => onDragStart(event, 'sendEmail', 'Enviar e-mail Node')} draggable>
          Enviar e-mail
        </div>
        <hr />
        <h5>Ação</h5>
          <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'sendHTTP', 'Enviar HTTP Node')} onDragStart={(event) => onDragStart(event, 'sendHTTP', 'Enviar HTTP Node')} draggable>
              HTTP Request
          </div>
      </div>
    </aside>
  );
};
