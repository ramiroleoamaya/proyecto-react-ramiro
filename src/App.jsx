import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import { useCarritoStore } from './store/useCarritoStore';

export default function App() {
  const carrito = useCarritoStore((state) => state.carrito);

  return (
    <BrowserRouter>
      <div className="body" style={{ background: '#111', minHeight: '100vh', color: 'white' }}>
        
        {/* ENRUTADOR DEL MENÚ DE NAVEGACIÓN */}
        <header className="header p-3" style={{ borderBottom: '2px solid #198754' }}>
          <div className="text-center mb-2">
            <img src="imagenes/green amps1.png" alt="Logo" width="100" className="img-fluid" />
          </div>
          <h1 className="titulo1 text-center text-success fw-bold h3 mb-3">AMPLIFICADORES DE BAJO Y GUITARRA</h1>
          <nav className="navegador text-center">
            <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
              <Link to="/" className="btn btn-outline-success btn-sm fw-bold">INICIO</Link>
              <Link to="/productos" className="btn btn-outline-success btn-sm fw-bold">PRODUCTOS Y SERVICIOS</Link>
              <span className="badge bg-danger p-2">🛒 Carrito: {carrito.length}</span>
            </div>
          </nav>
        </header>

        {/* CONTENEDOR DINÁMICO */}
        <main className="py-4">
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            
            {/* ATAJO PROTECTOR: Si entra por index.html, lo manda también al Inicio */}
            <Route path="/index.html" element={<Inicio />} />
          </Routes>
        </main>

        <footer className="text-center py-3 text-muted border-top border-success mt-5">
          <p className="mb-0 text-white small">Green Amps © 2026</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}