const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
// находим константы

tabItem.forEach(function (element) {
  element.addEventListener('click', open);  
})
// проходим по кнопкам и отслеживаем событие клик
// если клик случился, то отслеживаем по ip того с кем это происходит
function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });
  // убираем класс эктив у остальных при нажатии

  tabTarget.classList.add('tabs__btn-item--active');
  // добавляем класс эктив тому на кого нажали
  tabContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

}
// делаем что бы при нажатии на кнопку - открывались нужные item-content
// добавляем модификатор --active к tabs-content-item
// в css для .tabs__content-item говорим display: none. Но когда рядом с классом эктив - висплей грид, т.е.:
// .tabs__content-item.tabs__content-item--active{
//   display: grid;}
// нужно понять что написано в data-атрибуте data-button. на 12строке добавляем еще константу button = берем активный tabTarget, применяем data-set и далее пишем наше значение -саму button.
// далее в 21 строке добавляем - пробегаемся по контенту и сначала у всех контентов отменяем эктив и потом добавляем эктив тому на кого был клик по id, но нужно его найти по id, поэтому пишем document.querySelector(`#${button}`).classList.add('tabs__content-item--active'); -строка 25  !!!!обратить внимание на другие кавычки у querySelector(`#${button}`!!!!







const swiper = new Swiper(".swiper", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
       autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
});