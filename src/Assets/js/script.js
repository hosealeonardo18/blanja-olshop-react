// carousel trend
// const swiper = new Swiper(".slide-content", {
//   slidesPerView: 4,
//   spaceBetween: 380,
//   loop: true,
//   centerSlide: 'true',
//   fade: 'true',
//   grabCursor: 'true',
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,

//     },
//     520: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },

//     768: {
//       slidesPerView: 2,
//       spaceBetween: 25
//     },

//     881: {
//       slidesPerView: 2,
//       spaceBetween: 25
//     },

//     950: {
//       slidesPerView: 2,
//       spaceBetween: 10

//     },

//     991: {
//       slidesPerView: 3,
//       spaceBetween: 380

//     },

//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 150

//     },

//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 380,
//     },

//   }
// });


// categories
// const categories = new Swiper(".slideCategories", {
//   slidesPerView: 6,
//   spaceBetween: 5,
//   centeredSlides: false,
//   slidesPerGroupSkip: 1,
//   grabCursor: true,
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 2,
//       spaceBetween: 10

//     },

//     520: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },

//     577: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },

//     600: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },

//     678: {
//       slidesPerView: 4,
//       spaceBetween: 130,
//     },

//     768: {
//       slidesPerView: 4,
//       slidesPerGroup: 3,
//     },
//     881: {
//       slidesPerView: 5,
//       spaceBetween: 90
//     },
//     950: {
//       slidesPerView: 4,
//       spaceBetween: 120,
//     },
//     992: {
//       slidesPerView: 5,
//       spaceBetween: 60,
//     },

//     1200: {
//       slidesPerView: 5,
//       spaceBetween: 0,
//     },

//     1400: {
//       slidesPerView: 6,
//       spaceBetween: 10,
//     },
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// increment & decrement qty
// jumlah
const mines = document.querySelector('.decrement');
const plus = document.querySelector('.increment');
const qty = document.querySelector('.qty');

// size
const btnMines = document.querySelector('.btn-mines');
const btnPlus = document.querySelector('.btn-plus');
const btnQty = document.querySelector('.qty-size');

// cart
const btnMinesCart = document.querySelector('.btn-mines-cart');
const btnPlusCart = document.querySelector('.btn-plus-cart');
const QtyCart = document.querySelector('.qty-cart');

let num = 1;

// event jumlah
plus.addEventListener("click", () => {
  num++;
  qty.innerHTML = num
});

mines.addEventListener("click", () => {
  if (num > 1) num--;
  qty.innerHTML = num
});


// event size
btnPlus.addEventListener("click", () => {
  num++;
  btnQty.innerHTML = num
});

btnMines.addEventListener("click", () => {
  if (num > 1) num--;
  btnQty.innerHTML = num
});


// event cart
btnPlusCart.addEventListener("click", () => {
  num++;
  QtyCart.innerHTML = num
});

btnMinesCart.addEventListener("click", () => {
  if (num > 1) num--;
  QtyCart.innerHTML = num
});


