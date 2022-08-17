import './SidebarAcoes.css';
import React, { Children } from 'react';

export default () => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  const abrir = document.getElementById('btn-menu');
  const fechar = document.getElementById('btn-close');
  const sidebarAcoes = document.getElementById('sidebar-acoes');

  return (
    <aside>
      <button id='btn-menu' className='btn-menu'>Ações</button>
      <div id='sidebar-acoes' className='sidebar-acoes'>
        <div className='cabecalho-sidebar-acoes'>
          <h3>Ações</h3>
          <button id='btn-close' className='btn-close'></button>
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
      </div>
    </aside>
  );
};
