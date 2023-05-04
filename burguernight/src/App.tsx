import React from 'react';
import './App.css';
import TelaPedido from './componentes/TelaPedidos/index';
import { Route, Routes } from 'react-router-dom';
import TelaPrincipal from './componentes/TelaPrincipal/index';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pedidos" element={<TelaPedido />} />
        <Route path="/" element={<TelaPrincipal/>} /> 
      </Routes>
    </div>
  );
}

export default App;
