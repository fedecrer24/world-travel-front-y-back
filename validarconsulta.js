function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById('tel').value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === ""|| telefono === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    return true;
}
