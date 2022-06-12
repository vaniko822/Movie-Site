/* Slider */
let allCarouselItems = document.querySelectorAll('.carousel-item');
let nextBtn = document.querySelector('.arrow-right');
let prevBtn = document.querySelector('.arrow-left');

setInterval(()=> {
    let activeCarousel = document.querySelector('.carousel-item.active');
    let allIndicators = document.querySelectorAll('.indicator');
    let activeIndicator = document.querySelector('.indicator.active');

    if(activeCarousel.nextElementSibling !== null){
        activeCarousel.classList.remove('active');
        activeCarousel.nextElementSibling.classList.add('class', 'active');

        activeIndicator.classList.remove('active');
        activeIndicator.nextElementSibling.classList.add('class', 'active');
    } else {
        activeCarousel.classList.remove('active');
        allCarouselItems[0].classList.add('active');

        activeIndicator.classList.remove('active');
        allIndicators[0].classList.add('active');
    }
}, 3000)

nextBtn.addEventListener('click', function(){
    let activeCarousel = document.querySelector('.carousel-item.active');
    let allIndicators = document.querySelectorAll('.indicator');
    let activeIndicator = document.querySelector('.indicator.active');

    if(activeCarousel.nextElementSibling !== null){
        activeCarousel.classList.remove('active');
        activeCarousel.nextElementSibling.classList.add('class', 'active');

        activeIndicator.classList.remove('active');
        activeIndicator.nextElementSibling.classList.add('class', 'active');
    } else {
        activeCarousel.classList.remove('active');
        allCarouselItems[0].classList.add('active');

        activeIndicator.classList.remove('active');
        allIndicators[0].classList.add('active');
    }
})


prevBtn.addEventListener('click', function(){
    let activeCarousel = document.querySelector('.carousel-item.active');
    let allIndicators = document.querySelectorAll('.indicator');
    let activeIndicator = document.querySelector('.indicator.active');

    if(activeCarousel.previousElementSibling !== null){
        activeCarousel.classList.remove('active');
        activeCarousel.previousElementSibling.classList.add('class', 'active');
        
        activeIndicator.classList.remove('active');
        activeIndicator.previousElementSibling.classList.add('class', 'active');
    } else {
        activeCarousel.classList.remove('active');
        allCarouselItems[allCarouselItems.length-1].classList.add('active');

        activeIndicator.classList.remove('active');
        allIndicators[allIndicators.length-1].classList.add('active');
    }
})

let allIndicators = document.querySelectorAll('.indicator');

allIndicators.forEach(function(indicator){
    indicator.addEventListener('click', function(){
        let activateIndicatorId = this.getAttribute('data-id');
        let activeIndicator = document.querySelector('.indicator.active');
        let activeItem = document.querySelector('.carousel-item.active');
        activeIndicator.classList.remove('active');
        activeItem.classList.remove('active');
        allIndicators[activateIndicatorId].classList.add('active');
        allCarouselItems[activateIndicatorId].classList.add('active');
    })
})