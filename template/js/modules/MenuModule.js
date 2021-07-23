export default function MenuModule() {

    if ($('.header-menu').length) {

        $('.hamburger-btn').click(function () {
            $(this).addClass('--active');
            $('.header .header-menu').addClass('--active');
            $('body').addClass('modal-open');
            $('.header').addClass('--active');
        });

        $('.overplay').click(function () {
            $('.header-menu').removeClass('--active');
            $('.hamburger-btn').removeClass('--active');
            $('body').removeClass('modal-open');
            $('.header').removeClass('--active');
        });

    }






}