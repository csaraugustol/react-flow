import './SidebarEventos.css';
import React, { Children } from 'react';

export default () => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <h3>Eventos</h3>
      <hr/>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectUpdater', 'Atraso na coleta Node')} draggable>
        Atraso na coleta
      </div>
    </aside>
  );
};
