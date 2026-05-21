// src/components/Amplificador.jsx
import { useState } from 'react';

function Amplificador(props) {
  const [pedidos, setPedidos] = useState(0);
  // Creamos el estado de stock
  const [stock, setStock] = useState(5); 

  const manejarClic = () => {
    if (stock > 0) {
      setPedidos(pedidos + 1);
      setStock(stock - 1); // Bajamos el stock en 1
      props.onAgregar(); 
    }
  };

  return (
    <div style={{ 
      border: '2px solid #198754', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '10px', 
      backgroundColor: '#333',
      opacity: stock === 0 ? 0.7 : 1 // Si no hay stock es mas claro
    }}>
      <h3 style={{ color: '#198754' }}>{props.modelo}</h3>
      <p>Precio: ${props.precio}</p>
      <p>Stock disponible: <span style={{ color: stock > 0 ? 'white' : 'red' }}>{stock}</span></p>
      <p>Tus pedidos: {pedidos}</p>
      
      <button 
        onClick={manejarClic} 
        disabled={stock === 0} 
        style={{ 
          backgroundColor: stock === 0 ? '#555' : '#198754', 
          color: 'white', 
          border: 'none', 
          padding: '10px', 
          cursor: stock === 0 ? 'not-allowed' : 'pointer' 
        }}
      >
        {stock > 0 ? 'Añadir al Carrito' : 'Sin Stock'}
      </button>
      <p>
        Stock: {stock > 0 
          ? <span style={{ color: '#198754' }}>{stock} unidades</span> 
          : <span style={{ color: 'red', fontWeight: 'bold' }}>¡AGOTADO!</span>
        }
      </p>
    </div>
  );
}

export default Amplificador;