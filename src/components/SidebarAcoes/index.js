import './SidebarAcoes.css';
import React, { Children } from 'react';

export default () => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
          <h3 className='titulo'>Ações</h3>
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
    </aside>
  );
};
