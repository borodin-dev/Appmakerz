export default function hello() {
    //Preloader function
    $(window).on('load',function(){
        let $preloader = $('#page-preloader'),
            $dots = $preloader.find('.dots');
        $dots.fadeOut();
        $preloader.delay(350).fadeOut('slow');
        $('body').css('overflow-y','visible');
    });

    //Language switcher
    $(".language a").click(function(){
        let lng = $(this).attr("lang");
        console.log(lng);
        $(".group-info-block__lang").attr("lang",lng);
        return false;
    });

    //Hamburger open/close
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
    });
}

