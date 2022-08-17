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
      <h3 className='titulo'>Eventos</h3>
      <hr />
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectAtrasoColeta', 'Atraso na coleta Node')} draggable>
        Atraso na coleta
      </div>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectAtrasoEntrega', 'Atraso na entrega Node')} draggable>
        Atraso na entrega
      </div>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectDivergenciaValor', 'Divergencia de valor Node')} draggable>
        Divergência de valor
      </div>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectDivergenciaValorFrete', 'Divergencia no valor do frete Node')} draggable>
        Divergência no valor do frete
      </div>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectEventos', 'Eventos Node')} draggable>
        Eventos
      </div>
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectEventos', 'Eventos Node')} draggable>
        Valor cotado
      </div>
    </aside>
  );
};
