$(document).ready(function () {
    
    //Agregando clase active a la categoria all por defecto
    $('.category_list .category_item[category="all"]').addClass('ct_item_active');

    //Agregando clase Active al enlace seleccionado
    $('.category_item').click(function () {
        var catProduct = $(this).attr('category');

        $('.category_item').removeClass('ct_item_active');
        $(this).addClass('ct_item_active');

        //Ocultar Productos
        $('.product_item').css('transform', 'scale(0)');
        function hideProduct() {
            $('.product_item').hide();
        } setTimeout(hideProduct,400);

        //Mostrar Productos de categoria seleccionada
        function showProduct() {
            $('.product_item[category="'+catProduct+'"]').show();
            $('.product_item[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
    });

    //Mostrar todos los productos
    $('.category_item[category="all"]').click(function () {

        function showAll() {
            $('.product_item').show();
            $('.product_item').css('transform', 'scale(1)');
        } setTimeout(showAll,400)
    });

});