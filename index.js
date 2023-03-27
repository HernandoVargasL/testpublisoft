const dropDownButon = document.querySelector(".nav-bar-toggle");
const nav = document.querySelector(".navbar");
const dropDownMenu = document.querySelector(".navbarnavmobile");
const linklist = document.querySelector("#link-list")

dropDownButon.addEventListener('click', function handleClick(event) {
    dropDownMenu.classList.toggle('expandMenu');
});

// Tablet responsive
function tabletSize(x) {
    if (x.matches) {
        dropDownMenu.append(linklist);
    } else {
        linklist.remove()
        nav.append(linklist);
    }
}  
var x = window.matchMedia("(max-width: 1070px)")
tabletSize(x)
x.addListener(tabletSize)


// Swiper
const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    rewind: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 576px
    577: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 769px
    769: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});