const square = document.createElement('div');
document.body.appendChild(square);

let size = 100;
let grow = true; // ustawienie falgi zmiany działania programu

square.style.width = size + 'px';
square.style.height = size + 'px';

window.addEventListener('scroll', function(){
    if(grow === true){
        size += 10;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }else{
        size -= 10;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }

    if(size >= window.innerWidth * 0.5){
        grow = false;
    }else if(size <= 10){
        grow = true;
    }
    
})