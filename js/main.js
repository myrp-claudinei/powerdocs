$('#sidebar').hover(function () {
    setTimeout(function () { 
        $('#sidebar').removeClass('active');        
    }, 100);

    setTimeout(function () { 
        $('.sidebar-header h4').removeClass('d-none');
        $('#sidebar span').removeClass('d-none');
        $('.suporte').removeClass('w-100');
        $('.sobre').removeClass('w-100');
        $('.suporte').addClass('w-50');
        $('.sobre').addClass('w-50');
    }, 400);
});

$('#sidebar').mouseleave(function () {
    setTimeout(function () { 
        $('#sidebar').addClass('active');
    }, 400);

    setTimeout(function () { 
        $('.sidebar-header h4').addClass('d-none');
        $('#sidebar span').addClass('d-none');   
        $('.suporte').addClass('w-100');
        $('.sobre').addClass('w-100');
        $('.suporte').removeClass('w-50');
        $('.sobre').removeClass('w-50');
    }, 400);    
});

$('ul ul a').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('ul ul a.active').removeClass('active');
        $(this).addClass('active');    
    }
});

$('.table-fixed').mouseenter( function(){
    $('.table-fixed thead th').addClass('shdw');
});

$('.table-fixed').mouseleave( function(){
    $('.table-fixed thead th').removeClass('shdw');
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

