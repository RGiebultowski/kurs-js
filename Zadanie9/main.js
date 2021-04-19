const slideList = [{
    img: 'images/img1.jpg',
    text: 'Bmw M4'

}, {
    img: 'images/img2.jpg',
    text: 'Bmw M3'
}, {
    img: 'images/img3.jpg',
    text: 'Bmw M2'
}];

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const slideTimer = 2000; // milliseconds

let active = 0;


const changeDot = () => {
    console.log('change');
    const activeDot = dots.findIndex(dot => dot.classList.contains('active')); //contains zwraca boolean, a findIndex zwraca numer indexu na podstawie contains.

    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active == slideList.length){
        active = 0;
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

const changeSlideWithKeys = () => {
    if(active == slideList.length){
        active = 0;
    }else if(active < 0){
        active = slideList.length - 1;
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

function keyChangeSlider(event){
    if(event.key == 'ArrowLeft'){
        console.log('Arrow Left stop Interval');
        intervalManager(false);
        active--;
        changeSlideWithKeys();
        // changeDot();
    }else if(event.key == 'ArrowRight'){
        console.log('Arrow Right stop Interval');
        intervalManager(false);
        active++;
        changeSlideWithKeys();
        // changeDot();
    }else{
        return;
    }
    // clearInterval(interval);
    // intervalManager(true);

    // setTimeout(intervalManager(true),1000);
}

function intervalManager(flag){
    let interval;
    if(flag){
        console.log('interval on');
        interval = setInterval(changeSlide, slideTimer);
    }else{
        console.log('interval off');
        clearInterval(interval);
    }
}

intervalManager(true);

window.addEventListener('keydown', keyChangeSlider);

/*
let interval = setInterval(changeSlide, time);
function keyChangeSlide(e){
    if(e.key === "ArrowRight" || e.key === "ArrowLeft"){
        clearInterval(interval);
        e.key === "ArrowLeft" ? active-- : active++;

        if(active === slideList.length){
            active = 0;
        }else if(active < 0){
            active = slideList.length - 1;
        }

        img.src = slideList[active].img;
        h1.textContent = slideList[active].text;

        changeDot();
        interval = setInterval(changeSlide, time);
    }
}

*/