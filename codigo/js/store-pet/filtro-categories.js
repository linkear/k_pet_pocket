$(document).ready(function () {

    $('.categoryItem').click(function () {

        var catProduct = $(this).attr('category');

        console.log(catProduct)

        $('.product_item').hide();

        $('.product_item[category="' + catProduct + '"]').show();
    });

    $('.categoryItem[category="todos"]').click(function () {

        $('.product_item').show();
    });
})