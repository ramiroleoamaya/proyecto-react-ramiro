import { useState } from 'react';
// 1. Importamos tu Custom Hook desde la carpeta hooks
import { useFetch } from './hooks/useFetch'; 

export default function App() {
  // 2. Lo ejecutamos pasándole una URL de prueba (Trae una lista de usuarios simulados)
  const { data, cargando, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  // ==========================================
  // 🚨 REGLA DE ORO: CONSOLE.LOG DE VERIFICACIÓN
  // ==========================================
  console.log("--- PROBANDO TU CUSTOM HOOK (useFetch) ---");
  console.log("¿Está cargando?:", cargando);
  console.log("¿Hay error?:", error);
  console.log("Datos recibidos de internet:", data);
  console.log("------------------------------------------");

  return (
    <div className="body">
      <header className="header">
        <div className="logo">
          <img src="imagenes/green amps1.png" className="logoamp" alt="logo" width="200" height="200" />
        </div>
        <h1 className="titulo1">GREEN AMPS - BANCO DE PRUEBAS</h1>
      </header>

      <main className="container py-5 text-center text-white">
        <h2>Fase 1: Testeo de Conexión Inalámbrica</h2>
        <p className="lead">Mirá la consola del navegador (F12) para ver si el Hook responde.</p>
        
        {/* Renderizado condicional según el estado del Hook */}
        {cargando && <p className="text-warning fs-4">⏳ Conectando con el servidor...</p>}
        {error && <p className="text-danger fs-4">❌ Error: {error}</p>}
        
        {!cargando && !error && (
          <div className="alert alert-success mt-4">
            ¡Conexión exitosa! El Hook trajo {data.length} elementos desde internet de forma limpia.
          </div>
        )}
      </main>
    </div>
  );
}