new Swiper('.swiper',{
  // Отключение прокрутки слайдов курсором мыши
  simulateTouch: false,
  // Безконечность прокрутки
  loop: true,

  // Автопрокрутка
  autoplay: {
    // Пауза между прокруткой
    delay: 3000,
  },

  // Скорость прокрутки слайдов
  speed: 1000,

  // Замена дефолт анимации слайдов курсором мыши на плавную замену слайдов
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: "fade",
});


// Плавная прокрутка к якорю