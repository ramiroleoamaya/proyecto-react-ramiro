// src/components/Contacto.jsx
import { useState, useEffect } from 'react';
import { useCarritoStore } from '../store/useCarritoStore';

export default function Contacto() {
  const carrito = useCarritoStore((state) => state.carrito);
  const consultas = useCarritoStore((state) => state.consultas);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const vaciarConsultas = useCarritoStore((state) => state.vaciarConsultas);

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Sincronización inteligente para autocompletar el campo Mensaje
  useEffect(() => {
    let textoCompilado = "";

    if (carrito.length > 0) {
      textoCompilado += "📦 EQUIPOS SELECCIONADOS EN CARRITO:\n";
      carrito.forEach((item) => {
        textoCompilado += `- ${item.nombre} ($${item.precio.toLocaleString('es-AR')})\n`;
      });
      textoCompilado += "\n";
    }

    if (consultas && consultas.length > 0) {
      textoCompilado += "🛠️ SOLICITUDES DE SERVICE O REPARACIÓN:\n";
      consultas.forEach((nota) => {
        textoCompilado += `- ${nota}\n`;
      });
      textoCompilado += "\n";
    }

    if (textoCompilado !== "") {
      textoCompilado += "Hola Green Amps, me interesa procesar la orden detallada arriba. Aguardo su cotización técnica.";
      setMensaje(textoCompilado);
    }
  }, [carrito, consultas]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !email) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    setEnviado(true);
    vaciarCarrito();
    if (vaciarConsultas) vaciarConsultas();
  };

  if (enviado) {
    return (
      <div className="container py-5 text-center text-white">
        <div className="alert alert-success border-success bg-dark p-5 rounded shadow" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="text-success fw-bold mb-3">¡Pedido Enviado, {nombre}!</h2>
          <p className="text-white-50">Toda tu información y especificaciones técnicas fueron transferidas con éxito.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container py-4 text-white">
      <h2 className="text-center text-success fw-bold mb-4 text-uppercase">Contacto</h2>

      <div className="row g-5 justify-content-center">
        {/* FORMULARIO */}
        <div className="col-12 col-lg-6">
          <form onSubmit={manejarEnvio} className="p-4 bg-dark rounded border border-success shadow">
            <div className="mb-3">
              <label className="form-label fw-bold text-success">Nombre:</label>
              <input type="text" className="form-control bg-secondary text-white border-0" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-success">E-mail:</label>
              <input type="email" className="form-control bg-secondary text-white border-0" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-success">Teléfono:</label>
              <input type="tel" className="form-control bg-secondary text-white border-0" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold text-success">Mensaje / Detalle de la Orden:</label>
              <textarea className="form-control bg-secondary text-white border-0" rows="8" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold py-2">🚀 ENVIAR AL LABORATORIO</button>
          </form>
        </div>

        {/* INFORMACIÓN Y GOOGLE MAPS */}
        <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
          <div className="p-4 bg-dark rounded border border-secondary text-center shadow mb-4">
            <h4 className="text-success fw-bold mb-3">UBICACIÓN</h4>
            <p className="mb-1 text-white-50"><strong>Dirección:</strong> Fitz Roy 1963, CABA</p>
            <p className="mb-3 text-white-50"><strong>Teléfono:</strong> (011) 636-66871</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm w-100 fw-bold py-2">🗺️ VER EN GOOGLE MAPS</a>
          </div>

          <div className="w-100 rounded border border-secondary overflow-hidden shadow flex-grow-1" style={{ minHeight: '280px' }}>
            <iframe 
              title="Mapa Green Amps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7797087093306!2d-58.43851542426038!3d-34.5844439729611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58971775f0f%3A0x6bba847c2114251f!2sFitz%20Roy%201963%2C%20C1414CHM%20CABA!5e0!3m2!1ses-419!2sar!4v1717880000000!5m2!1ses-419!2sar"
              width="100%" height="100%" style={{ border: 0, minHeight: '280px' }} allowFullScreen="" loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}