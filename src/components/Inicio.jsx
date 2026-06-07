// src/components/Inicio.jsx
export default function Inicio() {
    return (
      <section id="inicio" className="container py-5 text-center text-white">
        <h2 className="text-success fw-bold mb-3">BIENVENIDOS A GREEN AMPS</h2>
        <p className="lead mb-4">
          Diseñamos y fabricamos amplificadores con un sonido único y alta fidelidad para guitarra y bajo.
        </p>
        <div className="mb-4">
          <img 
            src="imagenes/perillasamp1.jpeg" 
            alt="Presentación Green Amps" 
            className="img-fluid rounded shadow border border-success" 
            style={{ maxHeight: '350px', objectFit: 'cover' }}
          />
        </div>
        <h3 className="text-warning italic">"Sonido con Identidad"</h3>
      </section>
    );
  }