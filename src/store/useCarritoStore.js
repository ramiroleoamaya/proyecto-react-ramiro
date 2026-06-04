// src/store/useCarritoStore.js
import { create } from 'zustand';

export const useCarritoStore = create((set) => ({
  // Estado inicial: el carrito arranca vacío
  carrito: [],

  // Acción global para añadir amplificadores
  agregarProducto: (producto) => set((state) => {
    const existe = state.carrito.find((item) => item.id === producto.id);

    if (existe) {
      // Si el equipo ya estaba, le sumamos 1 a la cantidad
      return {
        carrito: state.carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        ),
      };
    }

    // Si es nuevo, lo agregamos con cantidad base = 1
    return { carrito: [...state.carrito, { ...producto, cantidad: 1 }] };
  }),

  // Acción para limpiar el carrito por completo
  vaciarCarrito: () => set({ carrito: [] }),
}));