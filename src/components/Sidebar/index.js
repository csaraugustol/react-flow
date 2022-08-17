import './Sidebar.css';
import React, { Children } from 'react';

export default () => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <h3 className='titulo-eventos'>Eventos</h3>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectUpdater', 'Select Updater Node')} draggable>
        Atraso na entrega
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input', 'Input Node')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default', 'Default Node')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output', 'Output Node')} draggable>
        Output Node
      </div>
      <div className="dndnode text-updater" onDragStart={(event) => onDragStart(event, 'textUpdater', 'Text Updater Node')} draggable>
        Text Updater Node
      </div>
          <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectUpdater', 'Atraso na coleta Node')} draggable>
        Atraso na coleta
       </div>
          <hr/>
          <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'sendEmail', 'Enviar e-mail Node')} draggable>
              Enviar e-mail
          </div>
    </aside>
  );
};
