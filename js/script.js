// Скрытие header'a

var header = $('header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 65 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});



/* Бургер меню
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const headerLogo = document.querySelector(".header__logo");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
});

document.querySelectorAll('.menu__link').forEach(n => n.
    addEventListener('click', () => {
        menuIcon.classList.remove('active');
        menuBody.classList.remove('active');
    }));

window.onresize = function (e) {
    if (menuIcon.classList.contains('active') && menuBody.classList.contains('active')) {
        menuIcon.classList.remove('active');
        menuBody.classList.remove('active');
        console.log('1');
    }
};
*/

// прокрутка при клике (???)
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault();
        }
    }
}

//удаление якоря из ссылки
$('.menu_link').click(function(e){
	var anch = this.hash.slice(0);
	if(!anch || !anch[0] === "#") return;
	e.preventDefault();
	window.location.hash = '';
	var offset = $(anch).offset();
	$("html, body").animate({scrollTop:$(anch).offset().top},100);
	if(history.pushState) { history.pushState({}, null, window.location.pathname); }
});