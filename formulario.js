function mostrarFormulario(opcion) {
    // Ocultar todos los formularios
    document.getElementById('formularioConsultas').style.display = 'none';
    document.getElementById('formularioReservas').style.display = 'none';
    
    // Mostrar el formulario correspondiente a la opción seleccionada
    if (opcion === 'consultas') {
        document.getElementById('formularioConsultas').style.display = 'block';
    } else if (opcion === 'reservas') {
        document.getElementById('formularioReservas').style.display = 'block';
    }
}