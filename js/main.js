$('#sidebar').hover(function () {
    $('#sidebar').removeClass('active');
    $('.sidebar-header h4').removeClass('invisible');
    $('#sidebar span').removeClass('invisible');
});

$('#sidebar').mouseleave(function () {
    $('#sidebar').addClass('active');
    $('.sidebar-header h4').addClass('invisible');
    $('#sidebar span').addClass('invisible');
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

