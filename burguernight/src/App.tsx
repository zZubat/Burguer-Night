import React from 'react';
import './App.css';
import TelaPedido from './componentes/TelaPedidos';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pedidos" element={<TelaPedido />} />

      </Routes>
    </div>
  );
}

export default App;
