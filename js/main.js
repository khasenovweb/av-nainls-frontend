$(document).ready(function(){
    $('.hero__navbar__hamburger').click(function(){
        $(this).toggleClass('active');
        $('.hero__navbar__mobile').toggleClass('active');
    });


    $('[data-parallax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });


    $('.materials__slider').owlCarousel({
        items: 2,
        margin: 26,
        nav: true,
        dots: true,
        navText: ["<img src='/img/arrow-left.svg'>","<img src='/img/arrow-right.svg' >"],
        dotsContainer: ".materials__slider__dots",
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            }
        }
    });

});