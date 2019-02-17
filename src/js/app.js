import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';
import '../scss/style.scss';
import './jquery.waterwheelCarousel.js';

$(document).ready(function () {
    /* ====== Home Page Slider ====== */
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
    }
    /* ====== Kennisplatform Page Slider ====== */
    if ($(window).width() < 767.98) {
        let carouselCases = $('#carouselCases').waterwheelCarousel({
            // number tweeks to change apperance
            separation:                 20, // distance between items in carousel
            horizonOffsetMultiplier:    2,   // multipled by horizon offset to increase/decrease offset for each additional item
            sizeMultiplier:             0.48, // determines how drastically the size of each item changes
            opacityMultiplier:          0.5, // determines how drastically the opacity of each item changes
            flankingItems:              0,   // the number of items visible on either side of the center
            // animation
            speed:                      700,      // speed in milliseconds it will take to rotate from one to the next
            animationEasing:            'linear', // the easing effect to use when animating
            movedToCenter: function() {
                $('#nextCases, #prevCases').click(function(){
                    $(this).data('clicked', true);
                });
                if($('#nextCases').data('clicked')) {
                    if($('img.no-img').hasClass('carousel-center')){
                        $('#nextCases').click();
                    }
                } else if ($('#prevCases').data('clicked')){
                    if($('img.no-img').hasClass('carousel-center')){
                        $('#prevCases').click();
                    }
                }
            }
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
            movedToCenter: function() {
                $('#nextCases, #prevCases').click(function(){
                    $(this).data('clicked', true);
                });
                if($('#nextCases').data('clicked')) {
                    if($('img.no-img').hasClass('carousel-center')){
                        $('#nextCases').click();
                    }
                } else if ($('#prevCases').data('clicked')){
                    if($('img.no-img').hasClass('carousel-center')){
                        $('#prevCases').click();
                    }
                }
                if($('.iPad').hasClass('carousel-center')){
                    $(' #item-5').css('margin-left','0');
                }
            }
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
            movedToCenter: function() {
                $('#nextCases, #prevCases').click(function(){
                    $(this).data('clicked', true);
                });
                if($('#nextCases').data('clicked')) {
                    if($('img.no-img').hasClass('carousel-center')){
                        $('#nextCases').click();
                    }
                } else if ($('#prevCases').data('clicked')){
                    if($('img.no-img').hasClass('carousel-center')){
                        $('#prevCases').click();
                    }
                }
                if($('.iPad').hasClass('carousel-center')){
                    $(' #item-5').css('margin-left','0');
                }
            }
        });
        $('#prevCases').bind('click', function () {
            carouselCases.prev();
            return false
        });
        $('#nextCases').bind('click', function () {
            carouselCases.next();
            return false;
        });
    }
    /* ====== Reload script(for moments when you change resolution) ====== */
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
    /* ====== Table accordion ====== */
    $(".fold-table tr.view").on("click", function(){
        $(this).toggleClass("open").nextAll(".fold").slice(0, 3).toggleClass("open");
    });
    /* ====== Pricing Page Accordion ====== */
    $('.accordionButton').click(function() {       //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
        $('.accordionButton').removeClass('on');   //REMOVE THE ON CLASS FROM ALL BUTTONS
        $('.accordionContent').slideUp('fast');    //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        if($(this).next().is(':hidden') == true) { //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
            $(this).addClass('on');                //ADD THE ON CLASS TO THE BUTTON
            $(this).find('.chevron_up').css('transform', 'translateY(-50%) rotate(-180deg)');
            $(this).next().slideDown('normal');    //OPEN THE SLIDE
        } else {
            $('.chevron_up').css('transform', 'translateY(-50%) rotate(0)');
        }
    });
    /*****************************
     * CLOSES ALL S ON PAGE LOAD *
     *****************************/
    $('.accordionContent').hide();

});