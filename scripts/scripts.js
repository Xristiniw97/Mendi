
(function($){


    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (!isMobile.matches) {
        var $item = $("#bgCarouselSlider .carousel-item");
        var $wHeight = $(window).height();
        $item.eq(0).addClass("active");
        $item.height($wHeight);
        $item.addClass("full-screen");
        $(window).on("resize", function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    // bgCarouselSlider
    $("#bgCarouselSlider").carousel({
        interval: 5000,
        pause: false
    });

    
    // home_accommodationCarousel
    $(".home_accommodationCarousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive:{
            0:{
                items: 1
            },
            767:{
                items: 2
            },
            1300: {
                items:3
            }
        }
    });



    // REVIEWS OWL 
    $("#reviews-owl").owlCarousel({
        loop: true,
        navigation : true, 
        dots: true,
        items : 1
    });


    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $(".navbar").addClass("active");
        } else {
           $(".navbar").removeClass("active");
        }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $(".mobileMenu").addClass("active");
        } else {
           $(".mobileMenu").removeClass("active");
        }
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    }); 



        //experiences-owl
    $('.experiences-owl').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1
    });


})(jQuery);