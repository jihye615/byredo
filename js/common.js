const menuToggleBtn = document.querySelector('.menu-toggle-btn')
const menuHide = document.getElementById('gnb-mo')
let inHideMwnu = false

menuToggleBtn.addEventListener('click',function(){
    inHideMwnu = !inHideMwnu;
    if(inHideMwnu){
        menuToggleBtn.classList.add('active')
        menuHide.classList.add('show')
    }else{
        menuToggleBtn.classList.remove('active')
        menuHide.classList.remove('show')

    }
})
new Swiper('.main-slider .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView: 1,
    navigation : {
        prevEl : ".main-slider .button-prev",
        nextEl : ".main-slider .button-next"
    }
});


new Swiper('.best-item .swiper', {
    direction: 'horizontal',
    speed:1000,
    loop: true,
    autoplay : true,
    slidesPerView: 1,
    navigation : {
        prevEl : ".best-item .button-prev",
        nextEl : ".best-item .button-next"
    },
    breakpoints: { 
        320: { 
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4, 
        },
      }
});
