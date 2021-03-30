const div = document.querySelector('div');
let divPositionX = 150;
let divPositionY = 50;
let moveActive = false;
let insertDivX;
let insertDivY;


const init = () => {
    div.addEventListener('mousedown', onMouseDown);
    div.addEventListener('mouseup', onMouseUp);
}

const onMouseDown = (click) => {
    console.log('wcisniete');
    moveActive = !moveActive;
    div.addEventListener('mousemove', onMouseMove);
    div.style.backgroundColor = 'grey';

    insertDivX = click.offsetX;
    insertDivY = click.offsetY;
    console.log(insertDivX + ' ' + insertDivY);
}

const onMouseMove = (event) => {
    if(moveActive){
        console.log('ruch');
    divPositionX = event.clientX - insertDivX;
    divPositionY = event.clientY - insertDivY;
    div.style.left = divPositionX + 'px';
    div.style.top = divPositionY + 'px';
    }
}

const onMouseUp = () => {
    console.log('puszczone');
    moveActive = !moveActive;
    div.style.backgroundColor = 'black';
}

init();