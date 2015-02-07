(function ($) {
    'use strict';

    $.fn.parallax = function () {
        return this.each(function () {
            var $this = $(this);
            var plxBackground = $this.find('.parallax-background');

            var plxWindowTopToPageTop = $this.offset().top;
            var windowTopToPageTop = $(window).scrollTop();
            var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
            var plxSpeed = 0.35;

            plxBackground.css('top', -(plxWindowTopToWindowTop * plxSpeed) + 'px');
        });
    }
})(jQuery);

$(document).ready(function () {
    $(".parallax-window").parallax();
});

$(window).scroll(function (e) {
    $(".parallax-window").parallax();
});
