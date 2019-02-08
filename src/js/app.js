import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';
import '../scss/style.scss';
import './jquery.waterwheelCarousel.js';

$(document).ready(function () {

    if ($(window).width() < 767.98) {
        let carousel = $('#carousel').waterwheelCarousel({
            // number tweeks to change apperance
            separation:                 50, // distance between items in carousel
            horizonOffsetMultiplier:    1,   // multipled by horizon offset to increase/decrease offset for each additional item
            sizeMultiplier:             0.48, // determines how drastically the size of each item changes
            opacityMultiplier:          1, // determines how drastically the opacity of each item changes
            flankingItems:              1,   // the number of items visible on either side of the center
            // animation
            speed:                      700,      // speed in milliseconds it will take to rotate from one to the next
            animationEasing:            'linear', // the easing effect to use when animating
        });
        $('#prev').bind('click', function () {
            carousel.prev();
            return false
        });
        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });
    } else if
        ($(window).width() >= 768 || $(window).width() <= 991.98)
        {
            let carousel = $('#carousel').waterwheelCarousel({
                // number tweeks to change apperance
                separation: 127,
                horizonOffsetMultiplier: 1,
                sizeMultiplier: 0.78,
                opacityMultiplier: 1,
                flankingItems: 1,
                // animation
                speed: 700,
                animationEasing: 'linear',
            });
            $('#prev').bind('click', function () {
                carousel.prev();
                return false
            });
            $('#next').bind('click', function () {
                carousel.next();
                return false;
            });
        } else {
        let carousel = $('#carousel').waterwheelCarousel({
            // number tweeks to change apperance
            separation: 197,
            horizonOffsetMultiplier: 1,
            sizeMultiplier: 0.78,
            opacityMultiplier: 1,
            flankingItems: 2,
            // animation
            speed: 700,
            animationEasing: 'linear',
        });
        $('#prev').bind('click', function () {
            carousel.prev();
            return false
        });
        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });
    }
    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() < 1400) {
            location.reload();
        }
    });
});
