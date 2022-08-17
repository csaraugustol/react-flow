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
      <h3>Ações</h3>
          <hr />
          <h5>Comunicação</h5>
          
          <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'sendEmail', 'Enviar e-mail Node')} draggable>
              Enviar e-mail
          </div>
          <hr />
    </aside>
  );
};
