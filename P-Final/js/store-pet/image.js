'use strict';

var i = 0;
function imagePreview () {
    i ++;
    let btn_image = document.getElementById("uploadImage").files[0];

    let imagen1 = document.getElementById("changeImage1");
    let imagen2 = document.getElementById("changeImage2");
    let imagen3 = document.getElementById("changeImage3");
    let imagen4 = document.getElementById("changeImage4");

    let reader = new FileReader();

    reader.onload = function () {

        if (i == "1") {
            imagen1.src = reader.result;
        }
        if (i == "2") {
            imagen2.src = reader.result;
        }
        if (i == "3") {
            imagen3.src = reader.result;
        }
        if (i == "4") {
            imagen4.src = reader.result;
        }
    }

    reader.readAsDataURL(btn_image);
}