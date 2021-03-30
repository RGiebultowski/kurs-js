let red = 255;
let green = 255;
let blue = 255;


const init = () => {
    document.body.addEventListener('keydown', bodyExposure);
}

const bodyExposure = (event) => {
    if(event.key == "ArrowUp"){
        document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
        console.log(red, green, blue);
        console.log("Arrowy Up");
    }else if(event.key == "ArrowDown"){
        document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
        console.log(red, green, blue);
        console.log("Arrowy Down");
    }else{
        console.log('zły przycisk');
    }
}

init();