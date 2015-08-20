
$(function() {
    $('a.links').on('click', function(){
       var href = $(this).attr('href');
        $('#directions').hide();
        $('#rsvp').hide();
        $('#album').hide();
        $('#wall').hide();
        $('#home').hide();
       switch (href) {
           case '#rsvp':
               console.log('rsvp');
               $('#load').replaceWith($('#rsvp'));
               $(href).show();
               break;
           case '#directions':
               console.log('rsvp');
               $('#load').replaceWith($('#directions'));
               $(href).show();
               break;
           case '#album':
               console.log('rsvp');
               $('#load').replaceWith($('#album'));
               $(href).show();
               break;
           case '#wall':
               console.log('rsvp');
               $('#load').replaceWith($('#wall'));
               $(href).show();
               break;
           case '#home':
               $('#load').replaceWith($('#home'));
               $(href).show();
               break;
           default :
               $('#directions', '#album', '#rsvp').hide();
               break;
       }
    });
});
