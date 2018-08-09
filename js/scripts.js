$(document).ready(function () {
    $('.main-slider-init').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
        arrows: false
    });
//    
//    $('.tel-init').inputmask({
//        "mask": "+7 (999) 999-99-99"
//        , "placeholder": "_"
//        , showMaskOnHover: false
//        , showMaskOnFocus: true
//    }); 
//   
    
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
    
    
    
    
    
    
});
