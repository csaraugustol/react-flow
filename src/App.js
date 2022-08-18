import './App.css';
import { useState } from 'react';
import Flow from './components/Flow';
import SidebarAcoes from './components/SidebarAcoes';

function App() {
  return (
    <div>
      {/* <div>
        <SidebarAcoes />
      </div> */}
      <div className='tamanho-tela'>
      <Flow />
      </div>
      
    </div>

  );
}

export default App;