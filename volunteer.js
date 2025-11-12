TweenMax.from(".nav-icons, .brand-volunteer", 1, {
  opacity: 0,
  delay: 0.1,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.from(".nav-list, .nav-list-volunteer, .showcase-text-2", 1, {
  opacity: 0,
  delay: 0.4,
  x: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".text", 1, {
  opacity: 0,
  delay: 1,
  x: -30,
  ease: Expo.easeInOut
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '" style="width: 16px; height: 16px; margin: 0 8px; background-color: #ff9100;"></span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,  
    },
  });

  window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealTwo);

function revealTwo() {
  var reveals = document.querySelectorAll('.reveal-2');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealThree);

function revealThree() {
  var reveals = document.querySelectorAll('.reveal-3');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 10;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealFour);

function revealFour() {
  var reveals = document.querySelectorAll('.reveal-4');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 10;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}