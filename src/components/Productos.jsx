// src/components/Productos.jsx
import { useState } from 'react';
import { useCarritoStore } from '../store/useCarritoStore';

export default function Productos() {
  // Traemos todo lo necesario desde el Store Global de Zustand
  const agregarAlCarrito = useCarritoStore((state) => state.agregarAlCarrito);
  const consultas = useCarritoStore((state) => state.consultas);
  const agregarConsulta = useCarritoStore((state) => state.agregarConsulta);
  const eliminarConsulta = useCarritoStore((state) => state.eliminarConsulta);

  // Estados locales específicos (solo para la calculadora y la caja de texto)
  const [cantidadHoras, setCantidadHoras] = useState(1);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(5000);
  const [totalPresupuesto, setTotalPresupuesto] = useState(0);
  const [nuevaConsulta, setNuevaConsulta] = useState('');

  const baflesReales = [
    {
      id: "box-guitar-20w",
      nombre: "BOX-601 | 15W",
      imagen: "/imagenes/ampgui15.jpeg",
      descripcion: "¡El pequeño gigante! 15 watts reales de potencia. El más buscado para departamentos por su calidez y portabilidad.",
      precio: 950000
    },
    {
      id: "box-guitar-45w",
      nombre: "BOX-601 | 30W",
      imagen: "/imagenes/ampgui30.jpeg",
      descripcion: "¡El hermano del medio! 30 watts reales de potencia. Ideal para ensayos de bandas y pequeñas presentaciones en vivo.",
      precio: 1850000
    },
    {
      id: "cabezal-pro-100w",
      nombre: "BOX-601 | 100W",
      imagen: "/imagenes/ampgui100.jpeg",
      descripcion: "¡El gigante! 100 watts reales de potencia. Potencia perfecta para hacer que tu música sea escuchada por todo el mundo sin perder calidad.",
      precio: 3200000
    },
    {
      id: "box-bass-30w",
      nombre: "BOX-BASS | 30W",
      imagen: "/imagenes/ampbajo15.jpeg",
      descripcion: "Amplificador para bajo ideal para estudio y grabaciones. Definición extrema en frecuencias bajas con compresión integrada.",
      precio: 1450000
    },
    {
      id: "bafle-2x10-vintage",
      nombre: "BAFLE 2X10 VINTAGE",
      imagen: "/imagenes/ampbajo75.jpeg",
      descripcion: "Caja acústica equipada con parlantes seleccionados para lograr ese tono clásico, profundo y con la pegada única de Green Amps.",
      precio: 2100000
    },
    {
      id: "bafle-4x10-pro",
      nombre: "BAFLE 4X10 PRO STAGE",
      imagen: "/imagenes/ampbajo110.jpeg",
      descripcion: "Caja de alta potencia pensada para giras. Máxima presión acústica, rejilla reforzada y robustez estructural extrema.",
      precio: 3800000
    }
  ];

  const manejarCalcular = () => {
    setTotalPresupuesto(cantidadHoras * servicioSeleccionado);
  };

  const manejarAgregarConsulta = () => {
    if (!nuevaConsulta.trim()) return;
    agregarConsulta(nuevaConsulta); // Guarda de forma global
    setNuevaConsulta('');
  };

  const solicitarServicioEspecial = (tipoServicio) => {
    agregarConsulta(`Solicitud de: ${tipoServicio}`); // Guarda de forma global
    document.getElementById('seccion-tareas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container py-4 text-white">
      
      {/* 1. CATÁLOGO */}
      <h2 className="text-center text-success fw-bold mb-3 text-uppercase" style={{ letterSpacing: '2px' }}>
        Nuestros Equipos
      </h2>
      <p className="text-center text-muted mb-5">Elegí la potencia de Green Amps. Añadí componentes directo a tu orden.</p>

      <div className="row g-4 justify-content-center mb-5">
        {baflesReales.map((bafle) => (
          <div key={bafle.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 bg-dark text-white border border-success shadow">
              <div className="p-3 text-center" style={{ background: '#0a0a0a' }}>
                <img 
                  src={bafle.imagen} 
                  alt={bafle.nombre} 
                  className="img-fluid rounded" 
                  style={{ maxHeight: '160px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/180?text=Green+Amps'; }} 
                />
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title text-success fw-bold mb-2">{bafle.nombre}</h5>
                <p className="card-text text-white-50 small flex-grow-1">{bafle.descripcion}</p>
                <p className="fs-5 fw-bold text-warning my-3">${bafle.precio.toLocaleString('es-AR')}</p>
                <button onClick={() => agregarAlCarrito(bafle)} className="btn btn-success btn-sm fw-bold w-100 py-2 mt-auto">
                  ➕ AÑADIR AL STORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-success my-5" style={{ opacity: '0.2' }} />

      {/* 2. SERVICIOS DESCRIPTIVOS */}
      <section className="container py-4 bg-dark rounded border border-success p-4 mb-5 shadow">
        <h3 className="text-center text-success fw-bold mb-3 text-uppercase">🛠️ Servicio Técnico Especializado</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4 text-center">
            <div className="p-3 bg-black rounded border-top border-success border-4 h-100">
              <h5>⚡ CIRCUITOS</h5>
              <p className="small text-white-50">Solución a ruidos extraños, falsos contactos y cortocircuitos.</p>
              <button onClick={() => solicitarServicioEspecial("Service de Circuitos")} className="btn btn-outline-success btn-sm w-100 fw-bold">Solicitar Service</button>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="p-3 bg-black rounded border-top border-success border-4 h-100">
              <h5>🛠️ REPARACIÓN</h5>
              <p className="small text-white-50">Limpieza de potenciómetros y calibración interna de tensiones.</p>
              <button onClick={() => solicitarServicioEspecial("Consulta de Reparación")} className="btn btn-outline-success btn-sm w-100 fw-bold">Consultar Reparación</button>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="p-3 bg-black rounded border-top border-success border-4 h-100">
              <h5>🎛️ COMPONENTES</h5>
              <p className="small text-white-50">Reemplazo de válvulas de potencia, transformadores y parlantes.</p>
              <button onClick={() => solicitarServicioEspecial("Cambio de Componentes")} className="btn btn-outline-success btn-sm w-100 fw-bold">Solicitar Componentes</button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-success my-5" style={{ opacity: '0.2' }} />

      {/* 3. CALCULADORA */}
      <section className="container py-4 bg-dark rounded border border-success p-4 mb-5 shadow" style={{ maxWidth: '800px' }}>
        <h3 className="text-center text-success fw-bold mb-4">🧮 CALCULADORA DE PRESUPUESTO</h3>
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <input type="number" className="form-control bg-secondary text-white border-0" min="1" value={cantidadHoras} onChange={(e) => setCantidadHoras(Number(e.target.value))}/>
          </div>
          <div className="col-md-5">
            <select className="form-select bg-secondary text-white border-0" value={servicioSeleccionado} onChange={(e) => setServicioSeleccionado(Number(e.target.value))}>
              <option value={5000}>Service Estándar ($5.000 / hr)</option>
              <option value={8000}>Reparación Compleja ($8.000 / hr)</option>
              <option value={12000}>Restauración Vintage ($12.000 / hr)</option>
            </select>
          </div>
          <div className="col-md-3">
            <button onClick={manejarCalcular} className="btn btn-success fw-bold w-100">Calcular</button>
          </div>
        </div>
        {totalPresupuesto > 0 && <h4 className="text-center mt-3">Total: <span className="text-warning">${totalPresupuesto.toLocaleString('es-AR')}</span></h4>}
      </section>

      <hr className="border-success my-5" style={{ opacity: '0.2' }} />

      {/* 4. LISTA DE CONSULTAS */}
      <section id="seccion-tareas" className="container py-4 bg-dark rounded border border-success p-4 shadow" style={{ maxWidth: '800px' }}>
        <h3 className="text-center text-success fw-bold mb-4">📝 LISTA DE CONSULTAS / PEDIDOS</h3>
        <div className="input-group mb-3">
          <input type="text" className="form-control bg-secondary text-white border-0" placeholder="Ej: Consultar por stock..." value={nuevaConsulta} onChange={(e) => setNuevaConsulta(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && manejarAgregarConsulta()}/>
          <button onClick={manejarAgregarConsulta} className="btn btn-success fw-bold">Agregar Nota</button>
        </div>
        {consultas.length === 0 ? (
          <p className="text-center text-muted small italic">No hay notas registradas.</p>
        ) : (
          <ul className="list-group">
            {consultas.map((item, index) => (
              <li key={index} className="list-group-item bg-dark text-white border-secondary d-flex justify-content-between align-items-center">
                <span>⚡ {item}</span>
                <button onClick={() => eliminarConsulta(index)} className="btn btn-sm btn-outline-danger border-0">❌</button>
              </li>
            ))}
          </ul>
        )}
      </section>

    </section>
  );
}