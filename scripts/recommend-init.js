// 页面切换
$('.tabs').on('click', 'li', function (e) {
  let $li = $(e.currentTarget);
  let index = $li.index();
  $li.addClass('active').siblings().removeClass('active');
  $('.tab-content').children().eq(index).addClass('active').siblings().removeClass('active');

});

let mySwiper = new Swiper ('.swiper-container', {               
  loop: true,           
  // If we need pagination
  pagination: {
  el: '.swiper-pagination',
  },           
  // And if we need scrollbar
  scrollbar: {
  el: '.swiper-scrollbar',
  },
  autoplay: {
  delay: 1500,
  stopOnLastSlide: false,
  disableOnInteraction: true,
  }
})()