$(document).ready(function () {
    let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];

    images.forEach(function(img) {
        $('.slick').append(`<img data-lazy="images/${img}">`);
    });

    $('.slick').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
