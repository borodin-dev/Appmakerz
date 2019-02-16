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
    } else if ($(window).width() >= 768 && $(window).width() <= 991.98) {
        let carousel = $('#carousel').waterwheelCarousel({
            separation: 127,
            horizonOffsetMultiplier: 1,
            sizeMultiplier: 0.78,
            opacityMultiplier: 1,
            flankingItems: 1,
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
        console.log('bigger than992');
        let carousel = $('#carousel').waterwheelCarousel({
            separation: 197,
            horizonOffsetMultiplier: 1,
            sizeMultiplier: 0.78,
            opacityMultiplier: 1,
            flankingItems: 2,
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
    };
    /* reload script(for moments when you change resolution) */
    let cachedWidth = $(window).width();
    $(window).resize(function(){
        let newWidth = $(window).width();
        if(newWidth !== cachedWidth){
            let win = $(this);
            if (win.width() < 1400) {
                location.reload();
            }
            cachedWidth = newWidth;
        }
    });

    /* Table accordion */
    $(".fold-table tr.view").on("click", function(){
        $(this).toggleClass("open").nextAll(".fold").slice(0, 3).toggleClass("open");
    });
});
$(document).ready(function() {

    //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
    $('.accordionButton').click(function() {

        //REMOVE THE ON CLASS FROM ALL BUTTONS
        $('.accordionButton').removeClass('on');

        //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        $('.accordionContent').slideUp('fast');

        //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
        if($(this).next().is(':hidden') == true) {

            //ADD THE ON CLASS TO THE BUTTON
            $(this).addClass('on');
            $(this).find('.chevron_up').css('transform', 'translateY(-50%) rotate(-180deg)');
            //OPEN THE SLIDE
            $(this).next().slideDown('normal');
        } else {
            $('.chevron_up').css('transform', 'translateY(-50%) rotate(0)');
        }
    });

    /********************************************************************************************************************
     CLOSES ALL S ON PAGE LOAD
     ********************************************************************************************************************/
    $('.accordionContent').hide();

});
$(document).ready(function () {
    if ($(window).width() < 767.98) {
        let carouselCases = $('#carouselCases').waterwheelCarousel({
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
        $('#prevCases').bind('click', function () {
            carouselCases.prev();
            return false
        });
        $('#nextCases').bind('click', function () {
            carouselCases.next();
            return false;
        });
    } else if ($(window).width() >= 768 && $(window).width() <= 991.98) {
        let carouselCases = $('#carouselCases').waterwheelCarousel({
            separation: 127,
            horizonOffsetMultiplier: 1,
            sizeMultiplier: 0.78,
            opacityMultiplier: 1,
            flankingItems: 1,
            speed: 700,
            animationEasing: 'linear',
        });
        $('#prevCases').bind('click', function () {
            carouselCases.prev();
            return false
        });
        $('#nextCases').bind('click', function () {
            carouselCases.next();
            return false;
        });
    } else {
        console.log('bigger than992');
        let carouselCases = $('#carouselCases').waterwheelCarousel({
            separation: 155,
            horizonOffsetMultiplier: 1,
            sizeMultiplier: 0.78,
            opacityMultiplier: 1,
            flankingItems: 2,
            speed: 700,
            animationEasing: 'linear',
        });
        $('#prevCases').bind('click', function () {
            carouselCases.prev();
            return false
        });
        $('#nextCases').bind('click', function () {
            carouselCases.next();
            return false;
        });
    };
})