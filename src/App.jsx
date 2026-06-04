import { useEffect } from 'react';
// Importamos tu hook global del carrito recién creado
import { useCarritoStore } from './store/useCarritoStore';

export default function App() {
  // Conectamos el estado del carrito y la acción de agregar
  const carrito = useCarritoStore((state) => state.carrito);
  const agregarProducto = useCarritoStore((state) => state.agregarProducto);

  // ==========================================
  // 🚨 REGLA DE ORO: CONSOLE.LOG DE VERIFICACIÓN
  // ==========================================
  useEffect(() => {
    console.log("--- PROBANDO NUESTRO CARRITO GLOBAL (ZUSTAND) ---");
    console.log("Estado actual del carrito:", carrito);
    console.log("-------------------------------------------------");
  }, [carrito]);

  const probarBoton = () => {
    // Mandamos un amplificador de prueba al almacén central inalámbrico
    agregarProducto({ id: 1, name: "BOX-601 | 15W", precio: 150 });
  };

  return (
    <div className="body" style={{ background: '#111', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <header className="header text-center py-3" style={{ borderBottom: '2px solid #198754' }}>
        <h1 className="titulo1 text-success fw-bold">GREEN AMPS - PRUEBA DE ZUSTAND</h1>
      </header>

      <main className="container text-center py-5">
        <h2 className="mb-3">Fase 2: El Carrito Inalámbrico</h2>
        <p className="lead text-muted">Apretá el botón de abajo para despachar un equipo al store central.</p>
        
        <button className="btn btn-success btn-lg fw-bold my-4 px-5" onClick={probarBoton} style={{ fontSize: '1.2rem' }}>
          🛒 Agregar BOX-601 de Prueba
        </button>

        <div className="alert alert-dark mx-auto mt-3" style={{ maxWidth: '400px', borderColor: '#198754' }}>
          <h5>Equipos en el carrito: <span className="text-warning fw-bold">{carrito.length}</span></h5>
        </div>
      </main>
    </div>
  );
}