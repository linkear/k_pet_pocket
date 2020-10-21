'use strict';

const btn_validar = document.querySelector('#btn-validar');

let validar = () => {
    let required = document.querySelectorAll('#frm-registro [required]');
    let error = false;
    for (let i = 0; i < required.length; i++) {
        if (required[i].value == '') {
            required[i].classList.add('validar_error');
            error = true;
        } else {
            required[i].classList.remove('validar_error')
        }
    }

    return error;
};

let obtener_datos = () => {
    let error = validar();
    if (error) {
        Swal.fire({
            'title': 'Incorrecto',
            'text': 'Todos los campos deben estar llenos.',
            'icon': 'warning'
        });
    } else {
        /*Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron correctamente',
            'icon': 'success',
             timer: 1500
        })*/
        window.location.href = "../index.html";
    };
}

btn_validar.addEventListener('click', obtener_datos);
