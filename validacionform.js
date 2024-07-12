function validarFormulariores() {
    var formulario = document.getElementById("formularioReservas");
    var campos = formulario.querySelectorAll("input, select, textarea");
    var formularioValido = true;

    var radios = document.getElementsByName('gener');
    var locationSelects = document.getElementsByName('lugar');
    var radioChecked = false;
    var selectFilled = false;

    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            formularioValido = false;
            break;
        }
    }
   /* return formularioValido;*/

      // Check if at least one radio button is checked
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioChecked = true;
            break;
        }
    }

    // Check if at least one select dropdown is filled
    for (var j = 0; j < locationSelects.length; j++) {
        if (locationSelects[j].value !== 'Ninguno') {
            selectFilled = true;
            break;
        }
    }

    // If both conditions are met, form is valid
    if (radioChecked && selectFilled) {
        return true;
    } else {
       alert("Por favor, complete todos los campos.");
        return false;
    }

   
}