let list = document.querySelectorAll(".our-pets-list li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#008f83";
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})


TweenMax.from(".nav-icons, .brand-volunteer, .gallery", 1, {
  opacity: 0,
  delay: 0.1,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.from(".nav-list, .nav-list-volunteer, .nav-list-contact, .adopt-text", 1, {
  opacity: 0,
  delay: 0.4,
  x: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".brand, .donate-header", 1, {
  opacity: 0,
  delay: 1,
  y: -10,
  ease: Expo.easeInOut
})

TweenMax.from(".header-buttons, .kind-donation, .donation-wrapper, .contact-container", 1, {
  opacity: 0,
  delay: 1,
  y: 50,
  ease: Expo.easeInOut
})


TweenMax.from(".head-text", 1, {
  opacity: 0,
  delay: 1,
  y: -40,
  ease: Expo.easeInOut
})

TweenMax.from(".dog-outline", 1, {
  opacity: 0,
  delay: 1.4,
  x: -30,
  ease: Expo.easeInOut
})

TweenMax.from(".cat-outline", 1, {
  opacity: 0,
  delay: 1.4,
  x: 30,
  ease: Expo.easeInOut
})


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


  