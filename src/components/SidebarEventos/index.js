import './SidebarEventos.css';
import React, { Children } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

export default (props) => {

  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDoubleClick = (event, nodeType, label) => {
    props.onDoubleClick(event, nodeType, label);
  };

  var abrirMenuEvento = document.getElementById('btn-menu-eventos');
  var sidebarEventos = document.getElementById('sidebar-eventos');

  function chamaMenuEventos() {
    sidebarEventos.style.display = 'block';
    abrirMenuEvento.style.display = 'none';
  };

  function fechaMenuEventos() {
    sidebarEventos.style.display = 'none';
    abrirMenuEvento.style.display = 'block';
  };


  var abrirMenuAcoes = document.getElementById('btn-menu-acoes');
  var sidebarAcoes = document.getElementById('sidebar-acoes');

  function chamaMenuAcoes() {
    sidebarAcoes.style.display = 'block';
    abrirMenuAcoes.style.display = 'none';
  };

  function fechaMenuAcoes() {
    sidebarAcoes.style.display = 'none';
    abrirMenuAcoes.style.display = 'block';
  };

  const onDoubleClickAcao = (event, nodeType, label) => {
    props.onDoubleClick(event, nodeType, label);
  };

  return (
    <aside className='aside-eventos aside-acoes' style={{ zIndex: 105 }}>
      <div id='botoes-menu'>
        <button id='btn-menu-eventos' onClick={() => chamaMenuEventos()}><FaPlusCircle className='name' />Eventos</button>
        <button id='btn-menu-acoes' onClick={() => chamaMenuAcoes()}><FaPlusCircle className='name' />Ações</button>
      </div>
      <div id='sidebar-eventos' className='sidebar-eventos'>
      <div className='cabecalho-sidebar'>
        <h3 className='titulo'>Eventos</h3>
        <button className='btn-fechar' onClick={() => fechaMenuEventos()}><FaTimesCircle /></button>
        </div>
        <div className="save__controls">
          <button className='btn-save' onClick={props.onSave}>Salvar</button>
          <button className='btn-restore' onClick={props.onRestore}>Restaurar</button>
        </div>
        <hr />
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'selectAtrasoColeta', 'Atraso na coleta Node')} onDragStart={(event) => onDragStart(event, 'selectAtrasoColeta', 'Atraso na coleta Node')} draggable>
          Atraso na coleta
        </div>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'selectAtrasoEntrega', 'Atraso na entrega Node')} onDragStart={(event) => onDragStart(event, 'selectAtrasoEntrega', 'Atraso na entrega Node')} draggable>
          Atraso na entrega
        </div>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'selectDivergenciaValor', 'Divergencia de valor Node')} onDragStart={(event) => onDragStart(event, 'selectDivergenciaValor', 'Divergencia de valor Node')} draggable>
          Divergência de valor
        </div>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'selectDivergenciaValorFrete', 'Divergencia no valor do frete Node')} onDragStart={(event) => onDragStart(event, 'selectDivergenciaValorFrete', 'Divergencia no valor do frete Node')} draggable>
          Divergência no valor do frete
        </div>
        <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClick(event, 'selectEventos', 'Eventos Node')} onDragStart={(event) => onDragStart(event, 'selectEventos', 'Eventos Node')} draggable>
          Eventos
        </div>
      </div>
      <div>
        <div id='sidebar-acoes' className='sidebar-acoes'>
          <div className='cabecalho-sidebar'>
            <h3 className='titulo'>Ações</h3>
            <button className='btn-fechar' onClick={() => fechaMenuAcoes()}><FaTimesCircle /></button>
          </div>
          <hr />
          <h5>Comunicação</h5>
          <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClickAcao(event, 'sendSms', 'Enviar SMS Node')} onDragStart={(event) => onDragStart(event, 'sendSms', 'Enviar SMS Node')} draggable>
            Enviar SMS
          </div>
          <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClickAcao(event, 'sendWhatsapp', 'Enviar WhatsApp Node')} onDragStart={(event) => onDragStart(event, 'sendWhatsapp', 'Enviar WhatsApp Node')} draggable>
            Enviar WhatsApp
          </div>
          <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClickAcao(event, 'sendEmail', 'Enviar e-mail Node')} onDragStart={(event) => onDragStart(event, 'sendEmail', 'Enviar e-mail Node')} draggable>
            Enviar e-mail
          </div>
          <hr />
          <h5>Ação</h5>
          <div className="dndnode select-updater" onDoubleClick={(event) => onDoubleClickAcao(event, 'sendHTTP', 'Enviar HTTP Node')} onDragStart={(event) => onDragStart(event, 'sendHTTP', 'Enviar HTTP Node')} draggable>
            HTTP Request
          </div>
        </div>
      </div>
    </aside>
  );
};
