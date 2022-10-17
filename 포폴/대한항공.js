


if ($(window).width() > 768) {
    $('.mainslide').slick({
        autoplay: true,
    });
    $('.es').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    var header = document.querySelector('header'),
        nav = document.querySelector('nav');

    nav.addEventListener('mouseover', function () {
        header.style.height = '400px';
    });
    nav.addEventListener('mouseout', function () {
        header.style.height = '90px';
    });
} else {

    $('.mainslide').slick('unslick');
    $('.es').slick('unslick');
}
$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.mainslide').slick();
        $('.es').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        var header = document.querySelector('header'),
            nav = document.querySelector('nav');

        nav.addEventListener('mouseover', function () {
            header.style.height = '400px';
        });
        nav.addEventListener('mouseout', function () {
            header.style.height = '90px';
        });
    } else {

        $('.mainslide').slick('unslick');
        $('.es').slick('unslick');


    }

});





$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            $('.go-top').fadeIn();
        } else {
            $('.go-top').fadeOut();
        }
    });

    $('go-top').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: 0 }, 100);
    });
})
// 탑버튼



$(function(){
    $(".earth").click(function(){
        $(".modal").show();
    })
});
// 모달띄어주세요

$(".modal button").click(function(){
    $(".modal").hide();
});
// 버튼클릭끄기

$(".modal").click(function (e) {
    if (e.target.className != "modal") {
      return false;
    } else {
      $(".modal").hide();
    }
  });
//   버튼없이끄기