
// creacion de objetos
// Primero hay que realizar la base de datos de productos que son los objetos creados.
const productos = [
    {
        id: 1,
        categoria: "guitarra",
        titulo: "BOX-601 | 15W",
        subtitulo: "¡El pequeño gigante!",
        descripcion: "15 watts reales de potencia. El más buscado para departamentos.",
        imagen: "imagenes/ampgui15.jpeg",
        precio: 150
    },
    {
        id: 2,
        categoria: "guitarra",
        titulo: "BOX-601 | 30W",
        subtitulo: "¡El hermano del medio!",
        descripcion: "30 watts reales de potencia. Ideal para ensayos.",
        imagen: "imagenes/ampgui30.jpeg",
        precio: 250
    },
    {
        id: 3,
        categoria: "guitarra",
        titulo: "BOX-601 | 100W",
        subtitulo: "¡El gigante!",
        descripcion: " 1oo watts reales de potencia.El ideal para el vivo!.Potencia perfecta para hacer que tu voz sea escuchada por todo el mundo sin perder calidad ni expresion.",
        imagen: "imagenes/ampgui100.jpeg",
        precio: 450
    },
    {
        id: 4,
        categoria: "bajo",
        titulo: "BOX-BASS | 30W",
        subtitulo: "¡El pequeño groove!",
        descripcion: " 30 watts reales de potencia. El pequeño que te hara groovear en lugares reducidos!.Este equipo es perfecto para tocar en departamentos y pequeños ensambles.",
        imagen: "imagenes/ampbajo15.jpeg",
        precio: 175
    },
    {
        id: 5,
        categoria: "bajo",
        titulo: "BOX-BASS | 75W",
        subtitulo: "¡El gran pequeño!",
        descripcion: " 75 watts reales de potencia.El que te hara sentir presencia en cualquier lugar!.El equipo perfecto para ensayos potentes con tu sonido a la par de la necesidad de un grupo presente y fuerte.",
        imagen: "imagenes/ampbajo75.jpeg",
        precio: 275
    },
    {
        id: 6,
        categoria: "bajo",
        titulo: "BOX-BASS | 110W",
        subtitulo: "¡El pesado!",
        descripcion: " 110 watts reales de potencia.El que no pasa desapercibido!.Perfecto para escenarios,conciertos,auditorios grandes y estadios!!!.",
        imagen: "imagenes/ampbajo110.jpeg",
        precio: 475
    },
    
];

// segundo hay que renderizarlos

function renderizarProductos() {
    //traeme la info del div id = contenedor-dinamico
    
    const contenedor = document.getElementById('contenedor-dinamico');
    
    //por las dudas para no tener errores
    
    if (!contenedor) {
        console.error("No se encontró el contenedor con ID 'contenedor-dinamico'");
        return;
    }
    //primero hay que dejar vacio modificando el contenedor

    contenedor.innerHTML = ""; 
    
    //inicia el ciclo
    
    productos.forEach(p => { //metodo que toma cada elemento de la lista, uno por uno
        //p es el nombre del producto actual dentro del ciclo
        const columna = document.createElement('div');
        //creamos un elemento en la memoria
        columna.className = "col-md-4 mb-4";
        //Aquí ponemos estilos boostrap 
        //Aquí empieza la plantilla de como se vera el producto por dentro.
        //Estas comillas inclinadas permiten usar Template Literals que hacen que el codigo sea largo sin que se rompa y se pueden insertar variables directamente
        // Dentro de tu forEach en renderizarProductos:
       // Modificá solo esta parte dentro de renderizarProductos en main_8.js
        columna.innerHTML = `
        <div class="card h-100 bg-dark text-white shadow border-success">
        <img src="${p.imagen}" class="card-img-top p-3 img-miniatura" alt="${p.titulo}" style="height: 200px; object-fit: contain; cursor: pointer;">
            <div class="card-body text-center d-flex flex-column">
                <h5 class="text-success">${p.titulo}</h5>
                <p class="small text-secondary italic">${p.subtitulo}</p>
                <p class="card-text flex-grow-1">${p.descripcion}</p>
                <div class="mt-3">
                    <p class="fw-bold">USD ${p.precio}</p>
                    <button class="btn btn-success w-100 btn-agregar-pedido" data-titulo="${p.titulo}">
                    Agregar a pedidos
                    </button>
                </div>
            </div>
        </div>
        `;
        //para que el div aparezca en la pagina web.
        contenedor.appendChild(columna);
        
        
    });
}


document.addEventListener('DOMContentLoaded', renderizarProductos);
//document. representa todo el archivo html
//addeventlistener le dice que este atento, que viene una orden
//DOMContentLoaded hace que que el html sea leido en su totalidad antes de ejecutar javascript
//ejecuta la funcion renderizar productos

// funcion calculadora

// Capturamos los elementos una sola vez 
const inputPrecio = document.getElementById('precio-amp');
const inputCantidad = document.getElementById('cantidad-amp');
const btnCalcular = document.getElementById('btn-calcular');
const btnReset = document.getElementById('btn-reset');
const campoResultado = document.getElementById('resultado-texto');

// Funcion de calculo 
function procesarCalculo() {
    const p = parseFloat(inputPrecio.value);
    const c = parseInt(inputCantidad.value);

    // Validación simple
    if (isNaN(p) || isNaN(c) || c <= 0) {
        // si cualquiera de estas tres condiciones es verdadera se bloquea is non a number o c menor o igual a 0
        //mostar aviso en recuadro 
        campoResultado.innerText = "Ingresa valores válidos";
        campoResultado.classList.replace('text-white', 'text-danger');
        // evitar que  se ejecute el codigo siguiente
        return;
    }

    const total = p * c;
    // mostrar el resultado al usuario utilizando Template Literals
    campoResultado.innerText = `Total: $${total}`;//interpolacion colocar el resultado directamente en la cadena de texto
    campoResultado.classList.replace('text-danger', 'text-white');
}

// Asignacion de Eventos 
// En lugar de onclick en HTML, usamos addEventListener
btnCalcular.addEventListener('click', procesarCalculo);
// utilizar addEventListener permite agregar funciones al mismo boton si fuera necesario en el futuro.


// Evento para limpiar la pantalla
btnReset.addEventListener('click', () => {//Función Flecha (Arrow Function).cuando toque el boton se ejecuta todo lo que esta entre parentesis
    inputPrecio.value = "";//accedemos al valor
    inputCantidad.value = "";
    campoResultado.innerText = "Total: $0";// en resutado muestra un numero una vez reseteado vuelve a 0
});

//galeria

const modal = document.getElementById('modal-galeria');
const imgGrande = document.getElementById('imagen-grande');
const btnCerrar = document.getElementById('cerrar-modal');

// Usamos "Delegacion de Eventos" para las imagenes que se crean dinamicamente
document.getElementById('contenedor-dinamico').addEventListener('click', (e) => {
    // Si lo que clickeamos es una imagen con la clase 'img-miniatura'
    if (e.target.classList.contains('img-miniatura')) {
        modal.style.display = "flex"; // Mostramos el modal
        imgGrande.src = e.target.src; // Pasamos la ruta de la imagen
        imgGrande.style.maxWidth = "80%"; // Cuidamos el tamaño
    }
});

// Evento para cerrar el modal
btnCerrar.addEventListener('click', () => {
    modal.style.display = "none";
});

// Cerrar tambien si hace clic fuera de la imagen (mas comodo para la vista)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

//lista de tareas

const inputTarea = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');

// Funcion para añadir tarea
btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    
    if (texto !== "") {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.className = "list-group-item d-flex justify-content-between align-items-center bg-secondary text-white border-success";
        
        // El contenido de la tarea con botones de "completar" y "eliminar"
        nuevaTarea.innerHTML = `
            <span class="texto-tarea">${texto}</span>
            <div>
                <button class="btn btn-sm btn-outline-light me-2 btn-completar">✔</button>
                <button class="btn btn-sm btn-danger btn-eliminar">X</button>
            </div>
        `;
        
        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = ""; // Limpiar input
    }
});

// eventos para completar y eliminar
listaTareas.addEventListener('click', (e) => {
    // Si clickea el boton de completar
    if (e.target.classList.contains('btn-completar')) {
        const spanTexto = e.target.parentElement.parentElement.querySelector('.texto-tarea');
        spanTexto.classList.toggle('text-decoration-line-through');
        spanTexto.classList.toggle('text-muted');
    }
    
    // Si clickea el boton de eliminar
    if (e.target.classList.contains('btn-eliminar')) {
        e.target.parentElement.parentElement.remove();
    }
});

// funcion para agregar tareas a la lista
function agregarTareaDesdeCatalogo(texto) {
    const listaTareas = document.getElementById('lista-tareas');
    const nuevaTarea = document.createElement('li');
    nuevaTarea.className = "list-group-item d-flex justify-content-between align-items-center bg-secondary text-white border-success mb-2 shadow-sm";
    
    nuevaTarea.innerHTML = `
        <span class="texto-tarea">Pedido: ${texto}</span>
        <div>
            <button class="btn btn-sm btn-outline-light me-2 btn-completar">✔</button>
            <button class="btn btn-sm btn-danger btn-eliminar">X</button>
        </div>
    `;
    listaTareas.appendChild(nuevaTarea);
    nuevaTarea.scrollIntoView({ behavior: 'smooth' }); 
    console.log("Desplazando la vista hacia el nuevo pedido...[cite: 9]");      
}

// En lugar de 'contenedor-dinamico', escuchamos en todo el documento
document.onclick = function(e) {
    // Verificamos si lo que clickeamos tiene la clase de nuestros botones
    if (e.target.classList.contains('btn-agregar-pedido')) {
        const itemSeleccionado = e.target.getAttribute('data-titulo');
        
        // verificacion en consola
        console.clear();
        console.log("--- Señal Captada ---");
        console.log("Se agregó a la lista: " + itemSeleccionado);
        console.log("Ubicación del clic: " + e.target.parentElement.className);

        agregarTareaDesdeCatalogo(itemSeleccionado);
    }
};
//capturar boton "confirmar y enviar a contacto"
const btnEnviarContacto = document.getElementById('btn-enviar-contacto');

if (btnEnviarContacto) {
    btnEnviarContacto.addEventListener('click', () => {
        const items = document.querySelectorAll('#lista-tareas li .texto-tarea');
        
        // si no hay nada en la lista, le avisamos al usuario
        if (items.length === 0) {
            alert("Tu lista está vacía. ¡Agregá algún equipo o consulta primero!");
            return;
        }

        let pedidoTexto = "Hola Green Amps! Me interesa consultar por:\n";
        
        items.forEach((item, index) => {
            pedidoTexto += `- ${item.textContent}\n`;
        });

        // guardamos la lista en la memoria del navegador
        localStorage.setItem('pedidoPendiente', pedidoTexto);

        // verificamos en la consola que se guardo correctamente
        console.clear();
        console.log("--- Pedido guardado en LocalStorage ---");
        console.log(localStorage.getItem('pedidoPendiente'));

        // redirigimos a la pagina de contacto
        window.location.href = "contacto.html";
    });
}