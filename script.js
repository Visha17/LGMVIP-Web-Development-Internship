$(document).ready(function () {

    AOS.init();



    $('#navbar__toggler').click(function () {
        $('.navbar__collapse').slideToggle();
    });

    $(window).scroll(function () {
        let position = $(window).scrollTop();
        if (position > 80) {
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    let links = $('.navbar-nav a.nav-link');
    links.click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });




    $(document).ready(function () {
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by visha</small>';
                }
            }
        });
    });


    $('.review-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true
    });


});


