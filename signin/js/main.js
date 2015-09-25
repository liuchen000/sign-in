$('.signin').on('click', function(e) {
	$('.modal').fadeIn(200);

});

       $('.close').on('click', function(e) {
	     $('.modal').fadeOut(200);
});

     $('.submit').on('click', function(e) {
	     $('input').addClass('error');
});

$('input').on('click', function(e) {
	$(this).removeClass('error');
});