$(function(){
    $('#tabs').tabs();

    $( ".icon-lupa" ).on('click', function(){
        $(".input-search").trigger('focus');
    });
});