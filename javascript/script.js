

const smart = document.querySelector('.smart');
const firstimg = smart.querySelectorAll('.box')[0];
const arrow = document.querySelectorAll('.watch-btn i');


let isDragstart = false;
let firstimgWidth = firstimg.clientWidth + 15; 

arrow.forEach(icon => {
    icon.addEventListener('click', () => { 
        smart.scrollLeft += icon.id == 'left' ? -firstimgWidth : firstimgWidth;
    });
});

// smart.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     smart.scrollLeft += e.deltaY;
// })


const sliderScrol = document.querySelector('.smart__item');

sliderScrol.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    sliderScrol.scrollLeft += evt.deltaY;
});

const sliderScrolShop = document.querySelector('.smart__Shop');

sliderScrolShop.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    sliderScrolShop.scrollLeft += evt.deltaY;
});

const electronics = document.querySelector('.smart__electronics');
electronics.addEventListener('wheel', (e) => {
    e.preventDefault();
    electronics.scrollLeft += e.deltaY;
});

const daily =  document.querySelector('.smart__Daily');
daily.addEventListener('wheel', (a) => {
    a.preventDefault();
    daily.scrollLeft += a.deltaY;
});