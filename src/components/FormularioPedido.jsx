import React from 'react';
import { useForm } from 'react-hook-form';

function FormularioPedido() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const enviarDatosAlTaller = (datos) => {
    
    console.log("🎸 ¡Datos validados listos para fabricar!", datos);
    alert(`¡Pedido recibido! Nos contactaremos a: ${datos.emailCliente}`);
  };

  return (
    <div className="container my-4 px-3" style={{ maxWidth: '450px' }}>
      <div className="card bg-dark text-white p-4 shadow rounded-3 border-success">
        <h3 className="text-center text-success mb-4 fw-bold">Pedido Custom Green Amps</h3>
        
        <form onSubmit={handleSubmit(enviarDatosAlTaller)}>
          
          {/* CAMPO NOMBRE */}
          <div className="mb-3">
            <label className="form-label fw-bold">Nombre del Músico/a:</label>
            <input 
              type="text" 
              className={`form-control ${errors.nombreMusico ? 'is-invalid' : ''}`} // <-- Sin tilde
              placeholder="Ej: Gustavo Cerati"
              {...register("nombreMusico", { required: "Poné tu nombre para el remito, che" })} // <-- Sin tilde
            />
            {errors.nombreMusico && <div className="invalid-feedback">{errors.nombreMusico.message}</div>} {/* <-- Sin tilde */}
          </div>

          {/* CAMPO EMAIL */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email de Contacto:</label>
            <input 
              type="email" 
              className={`form-control ${errors.emailCliente ? 'is-invalid' : ''}`}
              placeholder="nombre@gmail.com"
              {...register("emailCliente", { required: "Necesitamos tu mail para avisarte" })}
            />
            {errors.emailCliente && <div className="invalid-feedback">{errors.emailCliente.message}</div>}
          </div>

          {/* CAMPO POTENCIA */}
          <div className="mb-3">
            <label className="form-label fw-bold">Potencia del Ampli (Watts):</label>
            <input 
              type="number" 
              className={`form-control ${errors.watts ? 'is-invalid' : ''}`}
              placeholder="Mínimo 15W"
              {...register("watts", { 
                required: "Decinos de cuántos Watts lo querés",
                min: { value: 15, message: "Al menos 15 Watts para que suene fuerte en el ensayo" }
              })}
            />
            {errors.watts && <div className="invalid-feedback">{errors.watts.message}</div>}
          </div>

          {/* BOTÓN ENVIAR */}
          <button type="submit" className="btn btn-success w-100 fw-bold mt-2">
            Enviar a Producción 🛠️
          </button>

        </form>
      </div>
    </div>
  );
}

export default FormularioPedido;