import './SidebarAcoes.css';
import React, { Children } from 'react';

export default () => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };


  var abrir = document.getElementById('btn-menu');
  var sidebarAcoes = document.getElementById('sidebar-acoes');
  var teste = document.getElementById('teste');

  function chamaMenu() {
    sidebarAcoes.style.display = 'block';
    abrir.style.display = 'none';
  };

  function fecharMenu() {
    sidebarAcoes.style.display = 'none';
    abrir.style.display = 'block';
  };

  return (
    <aside className='aside-acoes'>
      <button id='btn-menu' className='btn-menu' onClick={() => chamaMenu()}>Ações</button>
      <div id='sidebar-acoes' className='sidebar-acoes'>
        <div className='cabecalho-sidebar-acoes'>
          <h3>Ações</h3>
          <button id='btn-close' className='btn-close' onClick={() => fecharMenu()}></button>
        </div>
        <hr />
        <h5>Comunicação</h5>
        <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'sendSms', 'Enviar SMS Node')} draggable>
          Enviar SMS
        </div>
        <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'sendWhatsapp', 'Enviar WhatsApp Node')} draggable>
          Enviar WhatsApp
        </div>
        <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'sendEmail', 'Enviar e-mail Node')} draggable>
          Enviar e-mail
        </div>
        <hr />
        <h5>Ação</h5>
        <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'default', 'Default')} draggable>
          HTTP Request
        </div>
      </div>
    </aside>
  );
};
