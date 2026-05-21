import React from 'react';
import FormularioPedido from './components/FormularioPedido';

function App() {
  return (
    <div className="bg-secondary min-vh-100 py-3">
      <h1 className="text-center text-light my-3 fw-bolder">Green Amps — Fabricación 1991</h1>
      <FormularioPedido />
    </div>
  );
}

export default App;