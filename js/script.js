// Скрытие header'a
var header = $('header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 65 && scrolled > scrollPrev) {
        header.addClass('out');
    } 
    else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

//удаление якоря из ссылки
$('.menu_link').click(function(e){
	var anch = this.hash.slice(0);
	if(!anch || !anch[0] === "#") return;
	e.preventDefault();
	window.location.hash = '';
	var offset = $(anch).offset();
	$("html, body").animate({scrollTop:$(anch).offset().top},100);
	if(history.pushState) { history.pushState({}, null, window.location.pathname); }
    header.addClass('out');
});