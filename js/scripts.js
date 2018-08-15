$(document).ready(function () {
    $('.main-slider-init').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots:false
                }
            }
        ]
    });

    $('.tel-init').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.slider-wrapp-rev').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendArrows: $('.dots-in'),
        appendDots: $('.dots-in')
        
    });
    
    
    $('.sec-slider-category .tab-pane').each(function() {
        if ($(this).find('.slider-ekz .one-slide').length > 3) {
            $(this).find('.slider-ekz').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '0px',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false
                        }
                    }
                ]
            });
        }
        else {
            $(this).find('.slider-ekz').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false
                        }
                    }
                ]
            });
        }
    });
    
    $(".cover-iframe").click(function () {
        var data_movie_link = $(this).attr("data-movielink");
        $(".cover-iframe-player").attr("style",$(this).attr("style")).fadeIn(0);
        $(".v-player iframe").attr({
            'src': data_movie_link
        });
    });

     $('.cover-iframe-player').on('click', function() {
        var src = $("#videoframe").attr("src");
        $("#videoframe").attr("src", src+"?autoplay=1" );
        $(this).fadeOut(1000);
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('scrolled');
        }
        else{
            $('header').removeClass('scrolled');
        }
    });
    if($(window).scrollTop() > 0){
        $('header').addClass('scrolled');
    }
    else{
        $('header').removeClass('scrolled');
    }
    $('.click-open').click(function(){
        if(!$(this).hasClass('opened')){
            $(this).addClass('opened');
            $(this).find('.second-lvl-menu').slideDown(150);
        }
        else{
            $(this).removeClass('opened');
            $(this).find('.second-lvl-menu').slideUp(150);
        }
    });
    
    $(".nav-button-1").on("click", function (e) {
         e.preventDefault();
         $("body").addClass("has-active-menu");
         $(".nav-holder-4").addClass("is-active");
         $(".mask-nav-3").addClass("is-active")
     });
     $(".close-menu, .mask-nav-3").on("click", function (e) {
         e.preventDefault();
         $("body").removeClass("has-active-menu");
         $(".nav-holder-4").removeClass("is-active");
         $(".mask-nav-3").removeClass("is-active");
     });
    
    $('header form').click(function(e){
        e.stopPropagation();
        if(!$(this).hasClass('opened')){
            $(this).addClass('opened');
            
        }
        
    });
    $('body,html').click(function(){
        if($('header form').hasClass('opened')){
            $('header form').removeClass('opened');
        }
    });

    ymaps.ready(init);

    $('#map').mouseover(function () {
        $(this).addClass('light');
    });

    $('#map').mouseleave(function () {
        $(this).removeClass('light');
    });
});

function init() {


    var myMap = new ymaps.Map("map", {
        center: [55.753215, 37.622504]
        , zoom: 16
        , controls: ['zoomControl']
    });


    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('scrollZoom');
    var myGeoObjects = [];
    var flag_for_center = true;



    $(".one-adr").each(function (e) {
        var latt = $(this).attr("data-lat");
        var longg = $(this).attr("data-lon");
        if (flag_for_center) {
            myMap.setCenter([latt, longg], 16, {
                checkZoomRange: false
            });
            flag_for_center = false;
        }
        myGeoObjects[e] = new ymaps.Placemark([latt, longg], {
            clusterCaption: 'Заголовок'
        }, {
            iconLayout: 'default#image'
            , iconImageHref: 'img/mark-map.png'
            , iconImageSize: [113, 122]
            , iconImageOffset: [-53.5, -85]
        });
    });


    var clusterIcons = [{
        href: 'img/marker-1.png'
        , size: [76, 70]
        , offset: [0, 0]
    }];


    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false
        , clusterOpenBalloonOnClick: false
        , clusterBalloonPanelMaxMapArea: 0
        , clusterBalloonContentLayoutWidth: 300
        , clusterBalloonContentLayoutHeight: 200
        , clusterBalloonPagerSize: 2
        , clusterBalloonPagerVisible: false
    });


    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);



    $('.look-at-map').click(function(){
        myMap.setCenter(
            [parseFloat($(this).parents(".adr").attr("data-lat"))
                , parseFloat($(this).parents(".adr").attr("data-lon"))], 16, {
                checkZoomRange: false
            });
    });


    $('.one-adr').click(function(){
        myMap.setCenter(
            [parseFloat($(this).attr("data-lat"))
                , parseFloat($(this).attr("data-lon"))], 16, {
                checkZoomRange: false
            });
    });



}

