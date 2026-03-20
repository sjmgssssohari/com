$(document).ready(function(){

    $(".menu-toggle").click(function(){
    $("nav").toggleClass("active");
    
    // Icon change karne ke liye logic
    if ($("nav").hasClass("active")) {
        $(this).text("✕"); // Close icon
    } else {
        $(this).text("☰"); // Hamburger icon
    }
});

     $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.next').click(function(){
        $('.slider').slick('slickNext');
    });

    $('.prev').click(function(){
        $('.slider').slick('slickPrev');
    });

    let isPlaying = true;

    $('.toggle').click(function(){
        if(isPlaying){
            $('.slider').slick('slickPause');
            $(this).html('<i class="fa-solid fa-play"></i>');
        } else {
            $('.slider').slick('slickPlay');
            $(this).html('<i class="fa-solid fa-pause"></i>');
        }
        isPlaying = !isPlaying;
    });


    

    // ----------------- Slider 3 (Mobile responsive) -----------------
    function mobileSlider(){
        var windowWidth = $(window).width();
        if(windowWidth < 991){
            var slidesToShow = (windowWidth < 576) ? 1 : 2;
            if(!$('.pic_box').hasClass('slick-initialized')){
                $('.pic_box').slick({
                    slidesToShow: slidesToShow,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                });
            } else {
                $('.pic_box').slick('slickSetOption', 'slidesToShow', slidesToShow, true);
            }
        } else {
            if($('.pic_box').hasClass('slick-initialized')){
                $('.pic_box').slick('unslick');
            }
        }
    }

    mobileSlider();
    $(window).on('resize', function(){
        mobileSlider();
    });


    $('.three_box').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
        {
            breakpoint: 992, // tablet
            settings: {
                slidesToShow: 2,
                arrows: true,
                 dots: true,
            }
        },
        {
            breakpoint: 576, // mobile
            settings: {
                slidesToShow: 1,
                arrows: true,
                 dots: true,
            }
        }
    ]
});

    // ----------------- Slider 2 (Public_disclosre) -----------------
    function setEqualHeight(){
        var maxHeight = 0;
        $('.Public_disclosre .slick-slide').css('height','auto');
        $('.Public_disclosre .slick-slide').each(function(){
            var h = $(this).outerHeight();
            if(h > maxHeight) maxHeight = h;
        });
        $('.Public_disclosre .slick-slide').height(maxHeight);
    }

    $('.Public_disclosre').slick({
        slidesToShow: 1,
        dots: true,
   infinite:true,
   slidesToScroll: 1,
       }).on('setPosition', function(){
        setEqualHeight();
    });

    $(window).on('resize', function(){
        setEqualHeight();
    });



});