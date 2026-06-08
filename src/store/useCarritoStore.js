// src/store/useCarritoStore.js
import { create } from 'zustand';

export const useCarritoStore = create((set) => ({
  carrito: [],
  consultas: [], // Aquí se guardan las notas del taller mecánico

  // Funciones para el Carrito de compras
  agregarAlCarrito: (producto) =>
    set((state) => ({ carrito: [...state.carrito, producto] })),

  eliminarDelCarrito: (id) =>
    set((state) => ({
      carrito: state.carrito.filter((item) => item.id !== id),
    })),

  vaciarCarrito: () => set({ carrito: [] }),

  // Funciones para las Consultas / Pedidos del taller técnico
  agregarConsulta: (texto) =>
    set((state) => ({ consultas: [...state.consultas, texto] })),

  eliminarConsulta: (indexEliminar) =>
    set((state) => ({
      consultas: state.consultas.filter((_, index) => index !== indexEliminar),
    })),

  vaciarConsultas: () => set({ consultas: [] }),
}));