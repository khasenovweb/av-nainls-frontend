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

    $('.services__tab_content__slider').owlCarousel({
        items: 3,
        margin: 30,
        nav: true,
        dots: true,
        navText: ["<img src='/img/arrow-left.svg'>","<img src='/img/arrow-right.svg' >"],
        // dotsContainer: ".services__tab_content__slider__dots",
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            500: {
                items: 2,
                nav: true,
            },
            700: {
                items: 3,
            }
        }
    });


    $('[data-tab-link="1"]').addClass('active');
    $('[data-tab-content]').hide();
    $('[data-tab-content="1"]').show();


    $('[data-tab-link]').click(function(){
        var id = $(this).attr('data-tab-link');
        $('[data-tab-link]').removeClass('active');
        $(this).addClass('active');
        $('[data-tab-content]').hide();
        $('[data-tab-content="'+id+'"]').show();
    });


    $('[data-faq-item-content]').slideUp(0);
    $('[data-faq-item-header]').click(function(){
        $(this).closest('[data-faq-item]').find('[data-faq-item-content]').slideToggle(200);
        $(this).closest('[data-faq-item]').toggleClass('active');
    });

});