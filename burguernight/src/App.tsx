import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TelaPrincipal from './componentes/TelaPrincipal/index';
import Pedido from './componentes/TelaPedido';
import Pagamento from './componentes/TelaPagamento';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TelaPrincipal/>} />
        <Route path="/Pedido" element={<Pedido/>} />
        <Route path="/Pagamento" element={<Pagamento/>} />
      </Routes>
    </div>
  );
}

export default App;
