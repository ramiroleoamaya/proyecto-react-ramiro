// src/components/Inicio.jsx
export default function Inicio() {
    return (
      <section id="inicio" className="container py-5 text-center text-white">
        <h2 className="text-success fw-bold mb-3"> BIENVENIDO A GREEN AMPS </h2>
        <p className="lead mb-4">
                        Somos una empresa técnica familiar dedicada a la fabricación y venta de amplificadores
                        para bajo y guitarra eléctricas.<br />
                        Ubicados en Buenos Aires - Argentina.<br />
                        Trabajamos para ayudarte a encontrar el sonido de tu voz artística desde 1991.
        </p>
        <div className="mb-4">
          <img 
            src="/imagenes/fotodeampsgreen.jpeg" 
            alt="Presentación Green Amps" 
            className="img-fluid rounded shadow border border-success" 
            style={{ maxHeight: '350px', objectFit: 'cover' }}
          />
        </div>
        <h3 className="text-warning italic">"Sonido con Identidad"</h3>
      </section>
    );
  }