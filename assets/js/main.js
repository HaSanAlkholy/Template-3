$(document).ready(function(){
    $('#header').slick({
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed :1500,
        autoplaySpeed:2000,
    });
   
    $('#work .slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed :600,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });

    window.addEventListener('scroll', function() {
    if (window.pageYOffset>$('#header').height()) {
        $("#up").fadeIn(1000);
      }else{
        $("#up").fadeOut(1000);
      }
     
    });

  });
