$(function () {
   $(".menu__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
   window.onscroll = function showHeader() {
    var header = document.querySelector('.header__inner');
    if(window.pageYOffset > 600) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   }
  $('.star').rateYo({
    starWidth: "18px",
    readOnly: true,
    spacing: "4px",
    starSvg:'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.13287 1.13888C6.37235 0.401831 7.41508 0.401834 7.65456 1.13888L8.71745 4.41011C8.82455 4.73973 9.13171 4.96289 9.47829 4.96289H12.9179C13.6928 4.96289 14.0151 5.95459 13.3881 6.41011L10.6054 8.43183C10.325 8.63555 10.2077 8.99664 10.3148 9.32626L11.3777 12.5975C11.6172 13.3345 10.7736 13.9474 10.1466 13.4919L7.36395 11.4702C7.08356 11.2665 6.70388 11.2665 6.42349 11.4702L3.64082 13.4919C3.01385 13.9474 2.17026 13.3345 2.40975 12.5975L3.47263 9.32626C3.57973 8.99664 3.4624 8.63555 3.18201 8.43183L0.399343 6.4101C-0.227628 5.95458 0.0945947 4.96289 0.869573 4.96289H4.30914C4.65572 4.96289 4.96289 4.73972 5.06999 4.41011L6.13287 1.13888Z" fill="#FF3B63"/></svg>'
  });
  $('.about__star, .product__star').rateYo({
    starWidth: "20px",
    readOnly: true,
    spacing: "4px",
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.76363 1.80517C9.15278 0.607464 10.8472 0.607462 11.2364 1.80517L12.6268 6.0845C12.8008 6.62013 13.3 6.98278 13.8632 6.98278H18.3627C19.6221 6.98278 20.1457 8.59428 19.1269 9.3345L15.4866 11.9793C15.031 12.3103 14.8404 12.8971 15.0144 13.4327L16.4048 17.7121C16.794 18.9098 15.4232 19.9057 14.4043 19.1655L10.7641 16.5207C10.3085 16.1897 9.69151 16.1897 9.23588 16.5207L5.59566 19.1655C4.57683 19.9057 3.20601 18.9098 3.59516 17.7121L4.98561 13.4327C5.15964 12.8971 4.96899 12.3103 4.51335 11.9793L0.873134 9.3345C-0.145694 8.59428 0.377913 6.98278 1.63725 6.98278H6.13681C6.70001 6.98278 7.19915 6.62013 7.37319 6.0845L8.76363 1.80517Z" fill="#FFDB73"/></svg>'
  });
  $('.about__items').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    prevArrow:'<button class="prev-arrow"><svg class="about__svg" width="10" height="17" viewbox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16L1.5 8.5L9 1" stroke="#6957ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>',
    nextArrow:'<button class="next-arrow"><svg class="arrow-svg about__svg" width="10" height="17" viewbox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16L1.5 8.5L9 1" stroke="#6957ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>',
    infinite: false,
    responsive:[
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
       breakpoint: 820,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
  $('.menu__button').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});
});