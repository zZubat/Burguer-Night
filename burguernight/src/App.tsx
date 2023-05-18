import React from 'react';
import './App.css';
import TelaPedido from './componentes/TelaPedidos/TelaPedidos';
import { Route, Routes } from 'react-router-dom';
import TelaPrincipal from './componentes/TelaPrincipal';
import TelaPagamento from './componentes/TelaPagamento';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pedidos" element={<TelaPedido />} />
        <Route path="/" element={<TelaPrincipal/>} />
        <Route path='/pagamento' element={<TelaPagamento/>} />
      </Routes>
    </div>
  );
}

export default App;
