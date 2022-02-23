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


const body = document.querySelector('.js-body');
const nav = document.querySelector('.js-form');
const button = document.querySelector('.js-button');
const burger = document.querySelector('.js-burger');

button.addEventListener('click', ()=>{  
  nav.classList.toggle('header__form--active');
  body.classList.toggle('body--lock');
});
burger.addEventListener('click', ()=>{  
  nav.classList.toggle('header__form--active');
  body.classList.toggle('body--lock');
});


const $btn = document.querySelector('#my-btn');

$btn.onclick = function() {
  console.log ('Hello World!');
}

