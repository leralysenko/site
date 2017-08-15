$('.multiple-items').slick({
    infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: true,
  	arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

$('.single-item').slick({
    infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true
  });