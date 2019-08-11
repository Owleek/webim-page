$(document).ready(function () {

    $(".header__menu").click(function () {
        $("body").toggleClass("active");
    });


    $('.elem-fadein').one('inview', function() {
      $(this).addClass('inview');
    });
});