let flag = true;
let sec = 0;
let ms = 0;
let timer;

const initButton = document.querySelector('button.main');
const resetButton = document.querySelector('button.reset');
const div = document.querySelector('.time div');

function startStop() {
    if(flag){
        initButton.textContent = "Stop";
        timer = setInterval(startTimer, 10);
        flag = !flag;
    }else{
        initButton.textContent = "Start";
        clearInterval(timer);
        flag = !flag;
    }
}

function startTimer() {
    ms++;
    if(ms >= 99){
        sec++;
        ms = 0;
    }
    div.textContent = `${sec}.${ms}`;
    // console.log(ms++);
}


function reset() {
    sec = 0;
    ms = 0;
    div.textContent = '---';
    flag = true;
    initButton.textContent ='Start';
}

initButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);