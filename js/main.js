$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('.sidebar-header h4').toggleClass('hide');
    $('#sidebar span').toggleClass('hide');
});

$('ul ul a').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('ul ul a.active').removeClass('active');
        $(this).addClass('active');    
    }
});