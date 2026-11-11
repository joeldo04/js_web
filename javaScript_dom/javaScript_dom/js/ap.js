// 1. Acceder a los elementos del DOM

const nombre = document.querySelector("#nombre");
const boton = document.querySelector("#botonSaludar");
const mensaje = document.querySelector("#mensaje");


// 2. Crear una función

function saludar() {

    // Obtener el valor ingresado
    const nombreUsuario = nombre.value.trim();

        // Actualizar el contenido del DOM
        mensaje.textContent =
            "¡Hola, " + nombreUsuario +
            "! Bienvenido a mi aplicación web.";
    
    // Reto 4. Exigir que el nombre del participante tenga al menos 5 
    if (nombreUsuario.length < 5) {
    mensaje.textContent = "El nombre debe tener al menos 5 caracteres.";
    return;
}

}

// 5. Escuchar el evento del botón

boton.addEventListener("click", saludar);