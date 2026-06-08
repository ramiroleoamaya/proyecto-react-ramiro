import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Productos from './components/Productos';
import Contacto from './components/Contacto'; 
import { useCarritoStore } from './store/useCarritoStore';

function Inicio() {
  return (
    <main className="container py-5 text-white">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h2 className="titulo1" style={{ fontSize: '2.5rem', color: '#198754', fontWeight: 'bold' }}>
            Sonido con Identidad
          </h2>
          <section id="inicio" className="mt-3 lh-lg text-white-50">
            <p>
              Somos una empresa técnica familiar dedicada a la fabricación y venta de amplificadores
              para bajo y guitarra eléctricas.<br />
              Ubicados en Buenos Aires - Argentina.<br />
              Trabajamos para ayudarte a encontrar el sonido de tu voz artística desde 1991.
            </p>
          </section>   
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src="/imagenes/fotodeampsgreen.jpeg" className="img-fluid rounded shadow border border-secondary" alt="Amplificador Green Amps" />
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const carrito = useCarritoStore((state) => state.carrito);

  return (
    <BrowserRouter>
      <div className="body" style={{ minHeight: '100vh' }}>
        <header className="header p-4" style={{ borderBottom: '2px solid #198754' }}>
          <div className="logo text-center mb-3">
            <img src="/imagenes/green amps1.png" className="logoamp" alt="Logo de marca Green Amps" width="180" height="180" />
          </div>
          <h1 className="titulo1 text-center text-uppercase fw-bold mb-4" style={{ fontSize: '1.8rem', letterSpacing: '1px' }}>
            Amplificadores de Bajo y Guitarra
          </h1>
          <nav className="navegador text-center">
            <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
              <Link to="/" className="btn btn-outline-success btn-sm fw-bold px-3">INICIO</Link>
              <Link to="/productos" className="btn btn-outline-success btn-sm fw-bold px-3">PRODUCTOS Y SERVICIOS</Link>
              <Link to="/contacto" className="btn btn-outline-success btn-sm fw-bold px-3">CONTACTO</Link>
              <span className="badge bg-danger p-2 fs-6 shadow-sm">🛒 Store: {carrito.length}</span>
            </div>
          </nav>
        </header>
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/index.html" element={<Inicio />} />
            <Route path="/productos-y-servicios.html" element={<Productos />} />
            <Route path="/contacto.html" element={<Contacto />} />
          </Routes>
        </main>

        
        <footer className="text-center py-4 text-muted border-top border-success mt-5" style={{ background: '#000' }}>
          <p className="mb-0 text-white-50 small">&copy; COPYRIGHT - SALAMANDRA - 2026</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}