$('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    breakpoint: 1140,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

