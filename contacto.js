// este codigo se ejecuta cuando se carga cualquier pagina
document.addEventListener('DOMContentLoaded', () => {
    // buscamos si existe el textarea del mensaje en el HTML actual
    const textareaMensaje = document.getElementById('mensaje'); 

    if (textareaMensaje) {
        // nos fijamos si hay un pedido guardado en la memoria
        const pedidoGuardado = localStorage.getItem('pedidoPendiente');

        if (pedidoGuardado) {
            // lo cargamos en el textarea
            textareaMensaje.value = pedidoGuardado;

            // consola para validar que cargo el texto
            console.log("--- Pedido recuperado con éxito ---");
            console.log(textareaMensaje.value);

            // borramos el localStorage para que no se repita el pedido la proxima vez
            localStorage.removeItem('pedidoPendiente');
        }
    }
});