var contenedor = document.querySelector(".slider"), // Se selecciona el contenedor del carrusel
    izquierda = document.getElementById("btn-izquierda"), // Selecciona el botón izquierdo por su ID
    derecha = document.getElementById("btn-derecha"); // Selecciona el botón derecho por su ID

var desplazamiento = 1500; // Define la cantidad de píxeles que se desplaza en cada paso

// Función para desplazar hacia la izquierda
function desplazarIzquierda() {
    var nuevaPosicion = contenedor.scrollLeft - desplazamiento; // Calcula la nueva posición restando el desplazamiento
    contenedor.scrollTo({ // Realiza el desplazamiento con un efecto suave
        left: nuevaPosicion, // Define la nueva posición hacia la izquierda
         behavior: 'smooth' // Establece un comportamiento suave en el desplazamiento
    });
}

// Función para desplazar hacia la derecha
function desplazarDerecha() {
    var nuevaPosicion = contenedor.scrollLeft + desplazamiento; // Calcula la nueva posición sumando el desplazamiento
    contenedor.scrollTo({ // Realiza el desplazamiento con un efecto suave
        left: nuevaPosicion, // Define la nueva posición hacia la derecha
        behavior: 'smooth' // Establece un comportamiento suave en el desplazamiento
    });
}

// Evento al pasar el mouse sobre el botón derecha
derecha.addEventListener("mouseenter", function() {
    contenedor.scrollLeft += contenedor.offsetWidth; // Desplaza el carrusel hacia la derecha sumando el ancho del contenedor
});

// Evento al pasar el mouse sobre el botón izquierda
izquierda.addEventListener("mouseenter", function() {
    contenedor.scrollLeft -= contenedor.offsetWidth; // Desplaza el carrusel hacia la izquierda restando el ancho del contenedor
});