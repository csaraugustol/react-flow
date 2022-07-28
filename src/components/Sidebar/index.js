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
      <div className="dndnode select-updater" onDragStart={(event) => onDragStart(event, 'selectUpdater', 'Select Updater Node')} draggable>
        Select Updater Node
      </div>
    </aside>
  );
};
