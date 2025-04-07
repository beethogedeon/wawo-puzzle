$(document).ready(function () {
    colors = ['#1593D4', '#016DC1', '#DCA66B','#A3592F'];
    $('.wrapper').css({
        height:Math.min($(window).width(),512) - 20,
        width:Math.min($(window).width(),512) -20,
    })
    new Jigsaw().init({
        container: '#slide0',
        image: 'images/amazone.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide1',
        image: 'images/bioguerra.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide2',
        image: 'images/portedunonretour.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide3',
        image: 'images/mosqueeporto.png',
        gridSize: 3
    });

    var slider = $(".slider").slick({
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        prevArrow: '<div class="slick-prev" aria-label="Previous" ><div></div></div>',
        nextArrow: '<div class="slick-next" aria-label="Next"><div></div></div>',
    });
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let slide = '#slide' + nextSlide;
        var newWidth = $(slide).width();
        $('.wrapper').animate({
            width: newWidth
        }, 400);
        $('body').css({
            'background-color': colors[nextSlide]
        }, 300);
        setTimeout(function () {
            $('.slider').slick('resize');
        }, 500)
    });
})