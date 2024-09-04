const datos = {
    nombre: '',
    celular: '',
    correo: '',
    mensaje: ''
}

// Eventos de los input
const nombre = document.querySelector('#nombre');
const celular = document.querySelector('#celular');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
// console.log(mensaje);

// prueba eventListener
// nombre.addEventListener('input', prueba);
// function prueba(){
//     alert('ingresaste el nombre');
// }

nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
    // console.log(evento);
    datos[evento.target.id] = evento.target.value;
    // console.log(datos);
}

const formulario = document.querySelector('.formulario');
// console.log(formulario);

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //--- destructuring
    const { nombre, celular, correo, mensaje } = datos;
    //console.log(nombre, celular, correo, mensaje);
    if (nombre === '' || celular === '' || correo === '' || mensaje === '') {
        // console.log('todos los campos son obligatorios');
        mostrarError('Diligencia todos los campos');
        return; //--- corta la ejecucion del codigo
    }
    mostrarMensaje("Datos enviados correctamente");

    function mostrarMensaje(mensaje){
        let alerta = document.createElement('p'); 
        alerta.textContent = mensaje; 
        alerta.classList.add('correcto');
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 5000)

    }


    function mostrarError(mensaje){
        //console.log(mensaje);
        let error = document.createElement('p'); 
        error.textContent = mensaje; 
        error.classList.add('error');
        // console.log(error);
        formulario.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 5000)


    }


})


