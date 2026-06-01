// src/App.jsx
import { useState } from 'react';
import { useFetch } from './hooks/useFetch'; // Importamos tu nuevo Custom Hook
import Amplificador from './components/Amplificador';

function App() {
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  // Usamos el Custom Hook apuntando a la API
  const { data: modelos, cargando, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const sumarAlGlobal = () => setTotalCarrito(totalCarrito + 1);

  const manejarBusqueda = (e) => setBusqueda(e.target.value);

  // Filtrado lógico (se mantiene igual)
  const modelosFiltrados = modelos.filter((item) =>
  item.name?.toLowerCase().includes(busqueda.toLowerCase())
);

  if (cargando) return <h2 style={{color: 'white', textAlign: 'center'}}>Conectando con Green Amps...</h2>;
  if (error) return <h2 style={{color: 'red', textAlign: 'center'}}>{error}</h2>;

  return (
    <div style={{ backgroundColor: '#212529', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#198754' }}>Green Amps - Catálogo Avanzado</h1>
      <p style={{ textAlign: 'center' }}>🛒 Total en Carrito: {totalCarrito}</p>
      
      {/* Buscador */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Buscar amplificador por modelo..." 
          value={busqueda} 
          onChange={manejarBusqueda}
          style={{
            padding: '12px 20px',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '25px',
            border: '2px solid #198754',
            backgroundColor: '#333',
            color: 'white',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {modelosFiltrados.length > 0 ? (
          modelosFiltrados.map((item) => (
            <Amplificador 
              key={item.id} 
              modelo={item.name} 
              precio={item.id * 5000} 
              onAgregar={sumarAlGlobal} 
            />
          ))
        ) : (
          <h3 style={{ color: '#aaa', marginTop: '20px' }}>No se encontraron amplificadores.</h3>
        )}
      </div>
    </div>
  );
}

export default App;