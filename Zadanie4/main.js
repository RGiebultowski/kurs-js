

const init = () => {
    document.body.addEventListener('click',(event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(x, y);
        changeColor(x, y);
    })
}

const changeColor = (mouseX, mouseY) => {
    if(mouseX%2 == 0 && mouseY%2 == 0){
        document.body.style.backgroundColor = "red";
        console.log('parzyste');
    }else if(mouseX%2 !== 0 && mouseY%2 !== 0){
        document.body.style.backgroundColor = "blue";
        console.log('nieparzyste');
    }else{
        document.body.style.backgroundColor = "green";
        console.log('jedna wartość jest parzysta');
    }
}

init();

