// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("Error en la conexión con el servidor");
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message || "No se pudo conectar con el servidor.");
        setCargando(false);
      });
  }, [url]); // Si la URL cambia, se vuelve a ejecutar

  // Retornamos los estados para que cualquier componente los use
  return { data, cargando, error };
}