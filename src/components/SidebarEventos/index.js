import './SidebarEventos.css';
import React, { Children } from 'react';

export default () => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className='aside-eventos'>
      <h3 className='titulo'>Eventos</h3>
      <div className="save__controls">
        <button className='btn-save'>Save</button>
        <button className='btn-restore'>Restore</button>
      </div>
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
      {/* <div id='' className='acoes'>
        <div className=''>
          <h3 className='titulo'>Ações</h3>
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
      </div> */}
    </aside>
  );
};
