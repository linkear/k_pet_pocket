"use strict";

var validacionRegistro = function () {
    let f = false;

    // name validation
    let name = $(".name-field").val();
    if (name == "" || name == undefined) {
        $(".name-field-msg")
            .html("Nombre es requerido")
            .addClass("text-danger");
        f = false;
    } else {
        $(".name-field-msg")
            .html("")
            .removeClass("text-danger")
            .addClass("text-success");
        f = true;
    }

    // surname validation
    let surname = $(".surname-field").val();
    if (surname == "" || surname == undefined) {
        $(".surname-field-msg")
            .html("Apellido es requerido")
            .addClass("text-danger");
        f = false;
    } else {
        $(".surname-field-msg")
            .html("")
            .removeClass("text-danger")
            .addClass("text-success");
        f = true;
    }

    // email validation
    let email = $(".email-field").val();
    let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "" || email == undefined) {
        $(".email-field-msg")
            .html("Correo electrónico es requerido")
            .addClass("text-danger");
        f = false;
    } else if (expression.test(email) == false ) {
        $(".email-field-msg")
            .html("Correo electrónico es invalido, el formato correcto debe ser (ejemplo@gmail.com)")
            .addClass("text-danger");
        f = false;
    } else {
        $(".email-field-msg")
            .html("")
            .removeClass("text-danger")
            .addClass("text-success");
        f = true;
    }

    // password validation
    let password = $(".password-field").val();
    let exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if ( password == "" || password == undefined) {
        $('.password-field-msg')
        .html("Contraseña es requerida")
        .addClass("text-danger");
        f = false;
    } else if (exp.test(password) == false ) {
        $('.password-field-msg')
        .html("Contraseña es invalida, debe contener al menos 1 carácter en mayúsculas, 1 carácter en minúsculas, 1 dígito y la longitud debe ser de 6 a 20")
        .addClass("text-danger");
        f = false;
    } else {
        $('.password-field-msg')
            .html("")
            .removeClass("text-danger")
            .addClass("text-success");
        $(location).attr('href','./public/home-principal.html');
        f = true;
    }

    f = false;
    return f;
};

/*const btn_validar = document.querySelector('#btn-validar');

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
        Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron correctamente',
            'icon': 'success',
             timer: 1500
        })
        window.location.href="./public/home-tienda.html";
    };
}

btn_validar.addEventListener('click', obtener_datos);*/