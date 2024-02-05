$(document).ready(function(){
    $('.hero__navbar__hamburger').click(function(){
        $(this).toggleClass('active');
        $('.hero__navbar__mobile').toggleClass('active');
    });
});