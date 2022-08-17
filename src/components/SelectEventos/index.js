import './SelectEventos.css'
import React, { useState, useRef, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function SelectAtrasoColeta({ data }) {

    const nomesEventos = ['Pedido recebido', 'Cotando transporte', 'Transporte contratado', 'Preparando pedido', 'Aguardando coleta',
'Em rota de coleta', 'Revisando pedido', 'Documento fiscal emitido', 'Pedido enviado', 'Coletado', 'Reagendando coleta', 'Em trânsito',
'Em rota de entrega', 'Sinistro resolvido', 'Sinistro / Extravio', 'Entregue', 'Entrega não realizada', 'Endereço não localizado',
'Endereço não localizado', 'Cliente ausente', '2° Tentativa de entrega', '3° Tentativa de entrega', 'Última tentativa de entrega',
'Recusado pelo cliente', 'Entrega parcial', 'Devolução Parcial', 'Cancelado'];

    const nomesEventosOrdenados = nomesEventos.sort();

    const listagemEventos = [];

    nomesEventosOrdenados.forEach((data) => {
        listagemEventos.sort();
        listagemEventos.push(<option value={data}>{data}</option>);
      });

    const handleStyle = { left: 10 };

    const onChangeSelect = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const onChangeText = useCallback((evt) => {
        console.log(evt.target.value);

    }, []);

    return (
        <div className="select-updater-node">
            {/*<Handle type="target" position={Position.Top} />*/}
            <div className='conteudo-node'>
                <label htmlFor="select">Eventos</label>

                <select id="action" name="select" onChange={onChangeSelect} >
                    {listagemEventos}
                </select>
            </div>
            {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
            {/* <Handle type="source" position={Position.Bottom} id="b" />*/}
            <Handle
                type="source"
                position="right"
            />
        </div>
    );
}

export default SelectAtrasoColeta;
