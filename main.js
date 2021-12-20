//preloader
$(window).on('load',function(){
  $(".loader").fadeOut(1000);
  $(".myBody").fadeIn(1000);
});

//AOS
   AOS.init({
    disable: 'phone',


    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

//--SWIPER--
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });




//scratch

$('#scratch').wScratchPad({
    size        : 200,          // The size of the brush/scratch. 200
    //bg          : '#404241',  // Background (image path or hex color).
    fg          : '#333',       // Foreground (image path or hex color).
    cursor      : 'grab' // Set cursor
});


const translationArray = [
  'My friend  -  Wǒ de péngyǒu  -  我的朋友',
  'My name is...  -  Wǒ jiào...  -  我叫...',
  'Thank you  -  Xièxiè  -  谢谢',
  'Hello  -  nǐhǎo  -  你好',
  'Good Night  -  wǎnān  -  晚安',
  'Good Morning  -  zǎo shang hǎo  -  早上好',
  'Good Evening  -  wǎn shàng hǎo  -  晚上好',
  'I love you  -  wǒ ài nǐ  -  我爱你',
  'Goodbye  -  zài jiàn  -  再见',
  'I am fine  -  wǒ hěn hǎo  -  我很好',
  'Welcome  -  huānyíng  -  欢迎',
  'Happy Birthday  -  shēngrì kuàilè  -  生日快乐',
  'Teacher  -  lǎoshī  -  老师',
  'Mother  -  māma  -  妈妈',
  'Father  -  bàba  -  爸爸',
  'How are you?  -  Nǐhǎo ma?  -  你好吗',
  'Tasty  -  Hěn hǎochī  -  很好吃'
];

var translation = translationArray[Math.floor(Math.random()*translationArray.length)];

window.onload = function(){
    let text = document.querySelector('#text');
    text.innerHTML = translation;
}





//tilt js
VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });        


//Back to top
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }
  var goTopBtn = document.querySelector('.back_to_top');
  window.addEventListener('scroll', trackScroll);



 /* function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);*/
})();
