import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TelaPrincipal from './componentes/TelaPrincipal/index';
import PedidoHamburguer from './componentes/TelaPedido/Hamburguer';
import PedidoBebidas from './componentes/TelaPedido/Bebidas';
import PedidoPorcoes from './componentes/TelaPedido/Porcoes';
import Pagamento from './componentes/TelaPagamento';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TelaPrincipal/>} />
        <Route path="/Pedidohamburguer" element={<PedidoHamburguer/>} />
        <Route path="/Pedidobebidas" element={<PedidoBebidas/>} />
        <Route path="/Pedidoporções" element={<PedidoPorcoes/>} />
        <Route path="/Pagamento" element={<Pagamento/>} />
      </Routes>
    </div>
  );
}

export default App;
