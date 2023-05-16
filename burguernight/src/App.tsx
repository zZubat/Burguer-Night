import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TelaPrincipal from './componentes/TelaPrincipal/index';
import Pedido from './componentes/TelaPedido';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TelaPrincipal/>} />
        <Route path="/Pedido" element={<Pedido/>} />
      </Routes>
    </div>
  );
}

export default App;
